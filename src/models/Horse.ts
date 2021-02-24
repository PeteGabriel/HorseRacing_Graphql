import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Event} from "./Event";


@Entity()
export class Horse {

    @Column()
    horse: string

    @PrimaryColumn()
    id_horse: number

    @Column()
    jockey: string

    @Column()
    trainer: string

    @Column()
    age: string

    @Column()
    weight: string

    @Column()
    number: string

    @Column()
    last_ran_days_ago: number

    @Column()
    non_runner: boolean

    @Column()
    form: string

    @Column()
    position: string

    @Column()
    odd: string

    @Column()
    sp: string

    @ManyToOne(() => Event, event => event.horses)
    event: Event;


    constructor(id: number) {
        this.id_horse = id
    }
}