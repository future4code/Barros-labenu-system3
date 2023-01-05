import { DataBasedata } from "./DataBasedata"

export class HobbyEstudanteDataBase extends DataBasedata {
    TABLE_NAME = "hobby_estudante"

    public async create(hobby: any) {
        return super.create(hobby)

    }
}