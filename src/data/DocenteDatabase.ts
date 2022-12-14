import { Docente } from "../class/Docente";
import { DataBasedata } from "./DataBasedata";

export class DocenteDatabase extends DataBasedata {
  TABLE_NAME= "docente"
 
  public async getAll() {
    return super.getAll()
  }

  public async create(docente: any) {
    await super.create(docente)
  }
  
  public async get(id: string) {
    return super.getById(id)
  }

  public async set (id: string, item:any) {
    await super.set(id, item)
  }
}
