import { ApiGateway } from "./ApiGateway";

export interface IRepository<T>{

  initGateway(gateway?: ApiGateway): void

  get(id: number): Promise<T | undefined>

  deleteBy(id: number): Promise<Boolean>

  add(data: T): Promise<boolean>

  findByStartTime(startTime: string): Promise<T[]>

  findByEventId(id: number): Promise<T[]>

}