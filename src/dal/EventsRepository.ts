import { Event } from "./../models/Event";
import {Repository, EntityRepository} from "typeorm";
import { IRepository } from "./IRepository";

@EntityRepository(Event)
export class EventsRepository extends Repository<Event> implements IRepository<Event>{

  async all(): Promise<Event[]>{
    return await this.find()
  }
}