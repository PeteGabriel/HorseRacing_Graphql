import { Query, Resolver, Arg, Int, Root, FieldResolver } from "type-graphql";
import {getCustomRepository} from "typeorm";
import { EventType } from '../types/EventType';
import { EventsRepository } from "../dal/EventsRepository";
import { MarketRepository } from "../dal/MarketsRepository";
import { IRepository } from "../dal/IRepository";
import { Market } from "../models/Market";

@Resolver(EventType)
export class EventsResolver {
  
  constructor(private eventsRepo: IRepository<Event>, private marketsRepo: IRepository<Market>) {
    this.eventsRepo = eventsRepo || getCustomRepository(EventsRepository);
    this.marketsRepo = marketsRepo || getCustomRepository(MarketRepository);
  }
 
  /**
   * Query an event by eventID field.
   * 
   * @param eventId Id of the event requested.
   */
  @Query(() => EventType, { nullable: true })
  event(@Arg("eventId", _type => Int) eventId: number){
    return this.eventsRepo.get(eventId)
  }

  /**
   * Resolve the complex field 'markets' for a certain event.
   * 
   * @param event The respective root object
   */
  @FieldResolver()
  markets(@Root() event: EventType) {
    return this.marketsRepo.findBy(event.eventId)
  }



}