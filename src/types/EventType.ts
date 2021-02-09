import { ObjectType, Field} from "type-graphql";
import { Event } from "src/models/Event";
import {HorseType} from "./HorseType";


@ObjectType()
export class EventType {

  constructor(eId: number){
    this.eventId = eId
  }

  @Field()
  eventId: number;

  @Field()
  sportId: number;

  @Field()
  startTime: string;

  @Field()
  description: string;

  @Field()
  raceName: string;

  @Field()
  course: string;

  @Field()
  going: string;

  @Field()
  length: string;

  @Field()
  horses: Array<HorseType>;


  static FromModel(data: Event) {
    let evt = new EventType(data.eventId)
    evt.sportId = data.sportId
    evt.raceName = data.raceName
    evt.length = data.length
    evt.course = data.course
    evt.startTime = data.startTime
    return evt
  }

  getTimeDescription() {
    return `${this.course} - ${this.raceName} - ${this.startTime.toLocaleString()}`
  }
}
