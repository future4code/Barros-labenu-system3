import { DataBasedata } from "./DataBasedata";

export class EspecialidadesDatabase extends DataBasedata {
  TABLE_NAME= "especialidade"
 
  public async getAll() {
    return super.getAll()
  }
  
  public async get(id: string) {
    return super.getById(id)
  }
}
