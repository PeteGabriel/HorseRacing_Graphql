export interface IRepository<T>{

  all(): Promise<T[]>

  get(id: number): Promise<T | undefined>

}