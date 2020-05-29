import { Query, Resolver, Arg, Int } from "type-graphql";
import {getCustomRepository} from "typeorm";
import { EventType } from '../types/EventType';
import { EventsRepository } from "../dal/EventsRepository";
import { IRepository } from "src/dal/IRepository";

@Resolver(EventType)
export class EventsResolver {
  
  constructor(private repo: IRepository<Event>) {
    this.repo = repo || getCustomRepository(EventsRepository);
  }

  @Query(() => [EventType])
  events(){
    return this.repo.all()
  }

  @Query(() => EventType, { nullable: true })
  event(@Arg("eventId", _type => Int) eventId: number){
    return this.repo.get(eventId)
  }


}