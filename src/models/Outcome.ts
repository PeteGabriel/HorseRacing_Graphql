import { Entity, Column, PrimaryColumn } from "typeorm";

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

}