import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Event {

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

  getDescription(){
    //TODO format startTime
    return `${this.raceName} - ${this.startTime}`
  }

}