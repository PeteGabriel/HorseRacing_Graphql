import { Query, Resolver, Arg, Int, Root, FieldResolver, Mutation } from "type-graphql";
import {getCustomRepository} from "typeorm";
import { EventType } from '../types/EventType';
import { EventsRepository } from "../dal/EventsRepository";
import { MarketRepository } from "../dal/MarketsRepository";
import { IRepository } from "../dal/IRepository";
import { Market } from "../models/Market";
import { Event } from "../models/Event";
import { Outcome } from "../models/Outcome";
import { OutcomeRepository } from "../dal/OutcomesRepository";
import EventInput from "../types/inputs/EventInput";

@Resolver(EventType)
export class EventsResolver {
  
  constructor(private eventsRepo: IRepository<Event>, 
    private marketsRepo: IRepository<Market>,
    private outcomesRepo: IRepository<Outcome>) {
    this.eventsRepo = eventsRepo || getCustomRepository(EventsRepository);
    this.marketsRepo = marketsRepo || getCustomRepository(MarketRepository);
    this.outcomesRepo = outcomesRepo || getCustomRepository(OutcomeRepository);
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
  async markets(@Root() event: EventType) {
    let mkts = await this.marketsRepo.findBy(event.eventId)

    /*
    for (const mkt of mkts){
      mkt.outcomes = await this.outcomesRepo.findBy(mkt.id);
    }*/

    await Promise.all(mkts.map(async (mkt) => {
      mkt.outcomes = await this.outcomesRepo.findBy(mkt.id)
    }));
    return mkts
  }

  @Mutation(_returns => EventType)
  async addEvent(@Arg("event") input: EventInput): Promise<EventType> {
    let evt = new Event(input.eventId, input.sportId)
    evt.raceName = input.raceName
    evt.length = input.length
    evt.going = input.going
    await this.eventsRepo.add(evt)
    return EventType.FromModel(evt)
  }

}