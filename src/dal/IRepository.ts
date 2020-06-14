export interface IRepository<T>{

  all(): Promise<T[]>

  get(id: number): Promise<T | undefined>

  findBy(id: number): Promise<T[]>

  add(data: T): Promise<boolean>

}