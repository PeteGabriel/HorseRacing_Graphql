export interface IRepository<T>{
  get(id: number): Promise<T | undefined>

  deleteBy(id: number): Promise<Boolean>

  add(data: T): Promise<boolean>

  findByStartTime(startTime: string): Promise<T[]>

  findByEventId(id: number): Promise<T[]>

}