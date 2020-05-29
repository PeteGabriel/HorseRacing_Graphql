import { ObjectType, Field } from "type-graphql";


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

}
