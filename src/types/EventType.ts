import { ObjectType, Field} from "type-graphql";
import { MarketType } from "./MarketType";
import { Event } from "src/models/Event";


@ObjectType()
export class EventType {

  constructor(eId: number, sId: number, rn: string, lth: string){
    this.eventId = eId
    this.sportId = sId
    this.raceName = rn
    this.length = lth
  }

  @Field()
  eventId: number;

  @Field()
  sportId: number;

  @Field()
  startTime: Date;

  @Field()
  description: string;

  @Field()
  raceName: string;

  @Field()
  course: string;

  @Field({ nullable: true })
  going: string;

  @Field({ nullable: true })
  length: string;

  @Field(_type => [MarketType], { nullable: true })
  markets: MarketType[];

  static FromModel(data: Event) {
    let evt = new EventType(data.eventId, data.sportId, data.raceName, data.length)
    evt.startTime = new Date()
    return evt
  }

  getTimeDescription() {
    return `${this.raceName} - ${this.startTime.toLocaleString()}`
  }
}
