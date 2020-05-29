import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Outcome } from "./Outcome";

@Entity()
export class Market {

  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  eventId: number;

  @PrimaryColumn()
  name: string;

  @Column()
  cashout: boolean;

  @Column()
  status: number;
  
  @OneToMany(_ => Outcome, outcome => outcome.marketId)
  outcomes: Outcome[];

}