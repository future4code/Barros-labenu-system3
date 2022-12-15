import knex from "knex";
import dotenv from "dotenv"

dotenv.config();


export abstract class DataBasedata {
    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        }

    })

    // incluido por Samuel 
    abstract TABLE_NAME : string;

    public async getAll() {
     const result = await DataBasedata.connection(
       this.TABLE_NAME
     ).select();
     return result;
   }

   public async create(item: any) {
     await DataBasedata.connection(this.TABLE_NAME).insert(item);
   }

   public async getById(id: string) {
     const result = await DataBasedata.connection(this.TABLE_NAME)
      .select()
      .where({id}) 
      return result
    }
}

export default DataBasedata;