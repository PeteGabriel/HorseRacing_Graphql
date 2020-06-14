import { Event } from "./../models/Event";
import {Repository, EntityRepository} from "typeorm";
import { IRepository } from "./IRepository";

@EntityRepository(Event)
export class EventsRepository extends Repository<Event> implements IRepository<Event>{
  
  async add(data: Event): Promise<boolean> {
    let res = await this.insert(data)
    if (res){
      console.log(res)
      return true;
    }
    return false;
  }

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