import {Arg, Int, Query, Resolver} from "type-graphql";
import {RaceType} from "../types/RaceType";
import {IRepository} from "../dal/IRepository";
import {Event} from "../models/Event";
import {getCustomRepository} from "typeorm";
import {EventsRepository} from "../dal/EventsRepository";
import {HorseType} from "../types/HorseType";

@Resolver(RaceType)
export class RaceResolver {

    constructor(private eventsRepo: IRepository<Event>) {
        this.eventsRepo = eventsRepo || getCustomRepository(EventsRepository);
        this.eventsRepo.initGateway()
    }

    /**
     * Query a race by the id field.
     *
     * @param eventId Id of the race requested.
     */
    @Query(() => RaceType, { nullable: true })
    async race(@Arg("eventId", _type => Int) eventId: number){
        console.log("\nRequesting race with ID " + eventId)
        let event: Event = await this.eventsRepo.get(eventId) as Event
        if (!event) {
            console.debug("Event with ID " + eventId + " not found.\n")
        }
        let race = new RaceType(event)

        let horses = event?.horses.map((h) => HorseType.FromModel(h))
        race.horses = horses

        return race
    }

}