import { Query, Resolver, Root, FieldResolver,  } from "type-graphql";
import {getCustomRepository} from "typeorm";
import { EventType } from '../types/EventType';
import { EventsRepository } from "../dal/EventsRepository";
import { IRepository } from "../dal/IRepository";
import { Event } from "../models/Event";

@Resolver(EventType)
export class EventsResolver {
  
  constructor(private eventsRepo: IRepository<Event>) {
    this.eventsRepo = eventsRepo || getCustomRepository(EventsRepository);
  }

  /**
   * Query an events.
   */
  @Query(() => [EventType], { nullable: true })
  async events(){
    //Format into "2021-02-03"
    let date = new Date().toISOString()
    date = date.substring(0,date.indexOf("T"))

    let events: Array<Event> = await this.eventsRepo?.findByStartTime(date)
    return events.map( (e) => new EventType(e))
  }

  /**
   * Resolve the field 'description' by using the behavior from EventType.
   * 
   */
  @FieldResolver()
  description(@Root() event: EventType) {
    return event.getTimeDescription()
  }


}