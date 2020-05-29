import { Event } from "./../models/Event";
import {Repository, EntityRepository} from "typeorm";
import { IRepository } from "./IRepository";

@EntityRepository(Event)
export class EventsRepository extends Repository<Event> implements IRepository<Event>{
  
  findBy(_id: number): Promise<Event[]> {
    throw new Error("Method not implemented.");
  }
  
  async get(eventId: number): Promise<Event | undefined> {
    return await this.findOne({eventId})
  }

  async all(): Promise<Event[]>{
    return await this.find()
  }
}