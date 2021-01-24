import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Event {

  constructor(eId: number, sId: number) {
    this.eventId = eId
    this.sportId = sId
  }

  withRaceName(name: string): this {
    this.raceName = name
    return this
  }

  withLength(length: string): this {
    this.length = length
    return this
  }

  withGoing(going: string): this {
    this.going = going
    return this
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