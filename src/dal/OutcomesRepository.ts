import { Repository, EntityRepository } from "typeorm";
import { Outcome } from "./../models/Outcome";
import { IRepository } from "./IRepository";


@EntityRepository(Outcome)
export class OutcomeRepository extends Repository<Outcome> implements IRepository<Outcome>{
  add(_data: Outcome): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  
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