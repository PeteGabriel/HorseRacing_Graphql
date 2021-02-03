export interface IRepository<T>{
  get(id: number): Promise<T | undefined>

  deleteBy(id: number): Promise<Boolean> 

  findBy(startTime: string): Promise<T[]>

  add(data: T): Promise<boolean>

}