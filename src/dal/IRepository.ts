export interface IRepository<T>{

  all(): Promise<T[]>

}