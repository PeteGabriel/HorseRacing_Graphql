import { ObjectType, Field} from "type-graphql";
import { Event } from "./../models/Event";


@ObjectType()
export class EventType {

  constructor(data: Event){
    this.eventId = data.eventId
    this.sportId = data.sportId
    this.raceName = data.raceName
    this.length = data.length
    this.course = data.course
    this.startTime = data.startTime
    this.going = data.going
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

  getTimeDescription() {
    return `${this.course} - ${this.raceName} - ${this.startTime.toLocaleString()}`
  }
}
