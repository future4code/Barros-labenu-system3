import { Estudante } from "../class/Estudante";
import DataBasedata from "./DataBasedata";

export class EstudanteDatabase extends DataBasedata {
  TABLE_NAME= "estudante";
 
  public async getAll() {
    return super.getAll()
  }

  public async create(estudante: Estudante) {
    await super.create(estudante)
  }
  
  public async get(id: string) {
    return super.getById(id)
  }
}
