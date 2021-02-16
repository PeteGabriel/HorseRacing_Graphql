import {EntityRepository, Repository} from "typeorm";
import {IRepository} from "./IRepository";
import {Horse} from "../models/Horse";
import {ApiGateway} from "./ApiGateway";
import { container } from "tsyringe";


@EntityRepository(Horse)
export class HorsesRepository extends Repository<Horse> implements IRepository<Horse>{

    gateway: ApiGateway

    initGateway(gateway?: ApiGateway){
        this.gateway = gateway || container.resolve(ApiGateway)
    }

    add(_: Horse): Promise<boolean> {
        return Promise.resolve(false);
    }

    deleteBy(_: number): Promise<Boolean> {
        return Promise.resolve(false);
    }

    get(_: number): Promise<Horse | undefined> {
        return Promise.resolve(undefined);
    }

    async findByEventId(_: number): Promise<Horse[]> {
        return this.find()
    }

    findByStartTime(_: string): Promise<Horse[]> {
        throw new Error("Method not implemented.");
    }

}
