export interface IRepository<T>{

  all(): Promise<T[]>

  get(id: number): Promise<T | undefined>

  deleteBy(id: number): Promise<Boolean> 

  findBy(id: number): Promise<T[]>

  add(data: T): Promise<boolean>

}