import "reflect-metadata"
import {container} from "tsyringe"
import { ApiGateway } from "../ApiGateway"

container.register<ApiGateway>(ApiGateway, {useClass: ApiGateway});
