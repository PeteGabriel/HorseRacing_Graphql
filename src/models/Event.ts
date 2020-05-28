import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  sportId: number;

  @Column()
  startTime: Date;

  @Column()
  raceName: string;

  @Column()
  going: string;

  @Column()
  length: string;

  getDescription(){
    //TODO format startTime
    return `${this.raceName} - ${this.startTime}`
  }

}