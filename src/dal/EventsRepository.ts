import { Event } from "./../models/Event";
import {Repository, EntityRepository} from "typeorm";
import { IRepository } from "./IRepository";

@EntityRepository(Event)
export class EventsRepository extends Repository<Event> implements IRepository<Event>{
  
  async get(eventId: number): Promise<Event | undefined> {
    return await this.findOne({eventId})
  }

  async all(): Promise<Event[]>{
    return await this.find()
  }
}