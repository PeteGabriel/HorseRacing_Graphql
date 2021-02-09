import {Column, Entity} from "typeorm";


@Entity()
export class Horse {

    @Column()
    name: string

    @Column()
    id: number

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
    lastRanDaysAgo: number

    @Column()
    nonRunner: boolean

    @Column()
    form: string

    @Column()
    position: string

    @Column()
    odd: string

    @Column()
    startingPrice: string


    constructor(id: number) {
        this.id = id
    }
}