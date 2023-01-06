import { Estudante } from "../class/Estudante";
import DataBasedata from "./DataBasedata";

export class EstudanteDatabase extends DataBasedata {
  TABLE_NAME= "estudante";
 
  public async getAll() {
    return super.getAll()
  }

  public async getAllNome(nome: string){
    const result = await DataBasedata.connection.raw(`
      SELECT * 
      FROM estudante
      WHERE (nome like "%${nome}%");
  `)
    return result 
  }

  public async create(estudante: Estudante) {
    await super.create(estudante)
  }
  
  public async get(id: string) {
    return super.getById(id)
  }

  public async set (id: string, item:any) {
    await super.set(id, item)
  }  

}
