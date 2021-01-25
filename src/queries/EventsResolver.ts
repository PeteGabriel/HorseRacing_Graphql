import { Query, Resolver, Arg, Int, Root, FieldResolver, Mutation } from "type-graphql";
import {getCustomRepository} from "typeorm";
import { EventType } from '../types/EventType';
import { EventsRepository } from "../dal/EventsRepository";
import { IRepository } from "../dal/IRepository";
import { Event } from "../models/Event";
import EventInput from "../types/inputs/EventInput";

@Resolver(EventType)
export class EventsResolver {
  
  constructor(private eventsRepo: IRepository<Event>) {
    this.eventsRepo = eventsRepo || getCustomRepository(EventsRepository);
  }
 

  /**
   * Query an events.
   */
  @Query(() => [EventType], { nullable: true })
  events(){
    return this.eventsRepo.all()
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
   * Resolve the field 'description' by using the behavior from EventType.
   * 
   */
  @FieldResolver()
  description(@Root() event: EventType) {
    return event.getTimeDescription()
  }

  @Mutation(_returns => EventType)
  async addEvent(@Arg("event") input: EventInput): Promise<EventType> {
    let evt = new Event(input.eventId, input.sportId)
      .withRaceName(input.raceName)
      .withCourse(input.course)
      .withLength(input.length)
      .withGoing(input.going)
    try {
      await this.eventsRepo.add(evt)
    }catch(e){
      throw new Error("Error trying to add new Event")
    }
    return EventType.FromModel(evt)
  }

  @Mutation(_returns => Boolean)
  async deleteEvent(@Arg("eventId") id: number): Promise<Boolean> {
    return await this.eventsRepo.deleteBy(id)
  }

}