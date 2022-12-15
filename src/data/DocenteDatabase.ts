import { Docente } from "../class/Docente";
import { DataBasedata } from "./DataBasedata";

export class DocenteDatabase extends DataBasedata {
  TABLE_NAME= "docente"
 
  public async getAll() {
    return super.getAll()
  }

  public async create(docente: Docente) {
    await super.create(docente)
  }
  
  public async get(id: string) {
    return super.getById(id)
  }
}
