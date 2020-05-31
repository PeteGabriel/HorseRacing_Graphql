import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Market } from "./Market";

@Entity()
export class Outcome {

  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  marketId: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  formattedPrice: string;

  @Column()
  jockey: string;

  @Column()
  trainer: string;

  @Column()
  form: string;

  @ManyToOne(_type => Market, market => market.outcomes)
  market: Market;
}