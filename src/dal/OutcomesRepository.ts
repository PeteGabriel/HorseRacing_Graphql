import { Repository, EntityRepository } from "typeorm";
import { Outcome } from "./../models/Outcome";
import { IRepository } from "./IRepository";


@EntityRepository(Outcome)
export class OutcomeRepository extends Repository<Outcome> implements IRepository<Outcome>{
  
  get(_id: number): Promise<Outcome | undefined> {
    throw new Error("Method not implemented.");
  }
  
  async all(): Promise<Outcome[]> {
    return await this.find()
  }
  
  async findBy(marketId: number): Promise<Outcome[]> {
    return await this.find({marketId})
  }

}