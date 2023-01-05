import { DataBasedata } from "./DataBasedata"

export class HobbyDatabase extends DataBasedata {
    TABLE_NAME = "hobby"

    public async getAll() {
        return super.getAll()
    }

    public async get(id: string) {
        return super.getById(id)
    }
}