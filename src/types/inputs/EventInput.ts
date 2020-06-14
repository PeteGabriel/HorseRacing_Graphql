import { InputType, Field } from "type-graphql";
import { Event } from "../../models/Event";

@InputType()
export default class EventInput implements Partial<Event>{
  
  @Field()
  eventId: number;

  @Field()
  sportId: number;
  
  @Field()
  raceName: string;

  @Field()
  going: string;

  @Field()
  length: string;

}