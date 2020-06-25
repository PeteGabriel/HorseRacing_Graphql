import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Event {

  constructor(eId: number, sId: number) {
    this.eventId = eId
    this.sportId = sId
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  sportId: number;

  @CreateDateColumn()
  startTime: Date;

  @Column()
  raceName: string;

  @Column()
  going: string;

  @Column()
  length: string;


}