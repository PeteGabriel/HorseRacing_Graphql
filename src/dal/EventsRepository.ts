import { Event } from "../models/Event";
import {Repository, EntityRepository, getCustomRepository} from "typeorm";
import { IRepository } from "./IRepository";
import {ApiGateway} from "./ApiGateway";
import {Horse} from "../models/Horse";
import {HorsesRepository} from "./HorsesRepository";
import { container } from "tsyringe";


@EntityRepository(Event)
export class EventsRepository extends Repository<Event> implements IRepository<Event>{

  gateway: ApiGateway
  horsesRepo: IRepository<Horse>

  constructor() {
    super();
    this.horsesRepo = getCustomRepository(HorsesRepository)
  }

  initGateway(gateway?: ApiGateway){
    this.gateway = gateway || container.resolve(ApiGateway)
  }

  async deleteBy(eventId: number): Promise<Boolean> {
    let evt = await this.findOne({eventId})
    if (evt){
      await this.remove(evt)
      return true
    }
    return false
  }

  async add(data: Event): Promise<boolean> {
    let res = await this.insert(data)
    return res != undefined
  }

  async findByStartTime(startTime: string): Promise<Event[]> {
    const fromDb = await this.find()
    if (fromDb.length > 0 && fromDb[0].startTime.startsWith(startTime)) {
      return fromDb
    }

    const parsedBody = JSON.parse(await this.gateway.getEvents({date: startTime}))
    let evts = []
    for (const elem of parsedBody) {
      let evt = new Event(elem.id_race, 100)
          .withCourse(elem.course)
          .withGoing(elem.going)
          .withRaceName(elem.title)
          .withLength(elem.distance)
          .withStartTime(elem.date)
      evts.push(evt)
      await this.add(evt)
    }
    return evts
  }

  /**
   * If there is no horses for a given event, search the web.
   * Save the new data (assign horses to a given event) and
   * return that event fulfilled with horses info.
   *
   */
  async get(eventId: number): Promise<Event | undefined> {

    let event = await this.findOne({eventId})
    if (!event) {
      return undefined
    }else {
      if (event.horses && event.horses.length != 0) {
        return event
      } else {
        let race: Event = JSON.parse(await this.gateway.getRace(eventId))
        //todo map horses to our structure

        event.horses = race.horses
        await this.save(event) //TODO try with update
        return event
      }
    }

  }

  findByEventId(_: number): Promise<Event[]> {
    return Promise.resolve([]);
  }


}