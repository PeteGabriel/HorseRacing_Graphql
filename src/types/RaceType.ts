import { Event } from "./../models/Event";
import {Field, ObjectType} from "type-graphql";
import {EventType} from "./EventType";
import {HorseType} from "./HorseType";


@ObjectType()
export class RaceType extends EventType {


    constructor(data: Event) {
        super(data)
    }


    @Field(_ => [HorseType], {nullable: true})
    horses: HorseType[];

}