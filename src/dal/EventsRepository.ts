import { Event } from "../models/Event";
import {Repository, EntityRepository} from "typeorm";
import { IRepository } from "./IRepository";
import {ApiGateway} from "./ApiGateway";


@EntityRepository(Event)
export class EventsRepository extends Repository<Event> implements IRepository<Event>{

  gateway: ApiGateway

  constructor() {
    super();

    //TODO inject this dependency
    this.gateway = new ApiGateway()
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

  async findBy(startTime: string): Promise<Event[]> {
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
  
  async get(eventId: number): Promise<Event | undefined> {
    return await this.findOne({eventId})
  }

}