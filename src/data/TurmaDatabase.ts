import { Turma } from "../class/Turma";
import { DataBasedata } from "./DataBasedata";

export class TurmaDatabase extends DataBasedata {
  TABLE_NAME= "turma";
 
  public async getAll() {
    return super.getAll()
  }

  public async create(turma: Turma) {
   const result = await super.create(turma)
    console.log(result);
    return result;
    
  }
  
  public async get(id: string) {
    return super.getById(id)
  }

  public async set (id: string, item:any) {
    await super.set(id, item)
  }
}
