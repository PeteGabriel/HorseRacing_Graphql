import { ObjectType, Field } from "type-graphql";
import { OutcomeType } from "./OutcomeType";


@ObjectType()
export class MarketType {

  @Field()
  eventId: number;

  @Field()
  name: string;

  @Field()
  cashout: boolean;

  @Field()
  status: number;
  
  @Field(_type => [OutcomeType], { nullable: true })
  outcomes: OutcomeType[];
}
