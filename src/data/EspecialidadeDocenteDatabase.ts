import { DataBasedata } from "./DataBasedata";

export class EspecialidadeDocenteDatabase extends DataBasedata {
  TABLE_NAME= "docente_especialidade"

  public async create(especialidade: any) {
    return super.create(especialidade)
  }
}
