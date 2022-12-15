import { Turma } from "../class/Turma";
import { DataBasedata } from "./DataBasedata";

export class TurmaDatabase extends DataBasedata {
  TABLE_NAME: "TURMA";
 
  public async getAll() {
    return super.getAll()
  }

  public async create(turma: Turma) {
    await super.create(turma)
  }
  
  public async get(id: string) {
    return super.getById(id)
  }
}
