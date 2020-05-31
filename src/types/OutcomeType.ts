import { ObjectType, Field } from "type-graphql";


@ObjectType()
export class OutcomeType {

  @Field()
  marketId: number;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  formattedPrice: string;

  @Field()
  jockey: string;

  @Field()
  trainer: string;

  @Field()
  form: string;
  
}