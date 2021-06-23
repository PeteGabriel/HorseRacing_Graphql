import {Field, ObjectType} from "type-graphql";
import {Horse} from "../models/Horse";

@ObjectType()
export class HorseType {

    static FromModel(h: Horse) {
        let horse = new HorseType(h.id_horse)
        horse.name = h.horse
        horse.jockey = h.jockey
        horse.trainer = h.trainer
        horse.age = h.age
        horse.weight = h.weight
        horse.number = h.number
        horse.lastRanDaysAgo = h.last_ran_days_ago
        horse.nonRunner = h.non_runner
        horse.form = h.form
        horse.position = h.position
        horse.odd = h.odd
        horse.startingPrice = h.sp
        return horse
    }

    constructor(id: number) {
        this.id = id
    }

    @Field()
    name: string

    @Field()
    id: number

    @Field()
    jockey: string

    @Field()
    trainer: string

    @Field()
    age: string

    @Field()
    weight: string

    @Field()
    number: string

    @Field({nullable: true})
    lastRanDaysAgo: number

    @Field()
    nonRunner: boolean

    @Field()
    form: string

    @Field()
    position: string

    @Field()
    odd: string

    @Field()
    startingPrice: string

}