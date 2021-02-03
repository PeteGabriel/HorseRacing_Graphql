import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

  withCourse(course: string): this {
    this.course = course
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

  withStartTime(startTime: string): this {
    this.startTime = startTime
    return this
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  sportId: number;

  @Column()
  startTime: string;

  @Column()
  raceName: string;

  @Column()
  course: string;

  @Column()
  going: string;

  @Column()
  length: string;


}