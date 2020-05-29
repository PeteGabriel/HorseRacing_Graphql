import { ObjectType, Field} from "type-graphql";
import { MarketType } from "./MarketType";


@ObjectType()
export class EventType {

  @Field()
  eventId: number;

  @Field()
  sportId: number;

  @Field()
  startTime: Date;

  @Field()
  raceName: string;

  @Field({ nullable: true })
  going: string;

  @Field({ nullable: true })
  length: string;

  //TODO add description

  @Field(_type => [MarketType], { nullable: true })
  markets: MarketType[];
}
