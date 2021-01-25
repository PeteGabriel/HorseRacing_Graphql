import { Event } from "./../models/Event";
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

  findBy(_id: number): Promise<Event[]> {
    throw new Error("Method not implemented.");
  }
  
  async get(eventId: number): Promise<Event | undefined> {
    return await this.findOne({eventId})
  }

  async all(): Promise<Event[]>{
    const fromDb = await this.find()
    if (fromDb.length == 0){
      const resp = await this.gateway.getEvents()

      const parsedBody = JSON.parse(resp)
      for (const elem of parsedBody) {
        let evt = new Event(elem.id_race, 100)
            .withCourse(elem.course)
            .withGoing(elem.going)
            .withRaceName(elem.title)
            .withLength(elem.distance)
        await this.add(evt)
      }
      return await this.find()
    }
    return fromDb
  }
}