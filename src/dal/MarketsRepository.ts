import { IRepository } from "./IRepository";
import { Market } from "./../models/Market";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Market)
export class MarketRepository extends Repository<Market> implements IRepository<Market>{
  
  get(_id: number): Promise<Market | undefined> {
    throw new Error("Method not implemented.");
  }
  
  async all(): Promise<Market[]> {
    return await this.find()
  }
  
  async findBy(eventId: number): Promise<Market[]> {
    return await this.find({eventId})
  }

}