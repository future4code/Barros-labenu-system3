import knex from "knex";
import dotenv from "dotenv"
import { TABLE_CLASS } from "./tableNames";
import { docente } from "./dados";

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

    public async set(id: string, item: any) {
      await DataBasedata.connection(this.TABLE_NAME)
      .where({id})
      .update(item)
    }

    public async buscaPorTurma (id:string) {

     const result = await DataBasedata.connection(this.TABLE_NAME)
     .join('estudante', 'turma.id', '=', 'estudante.turma_id')
     .join('docente', 'turma.id', '=', 'id_turma')
     .select('estudante.nome as estudante', 'docente.nome as docente')
     .where('turma.id', '=', id)

      const resEstudantes = new Set(result.map((pessoa:any)=> {
        return pessoa.estudante
      }))

      const resDocentes = new Set(result.map((pessoa:any)=> {
        return pessoa.docente
      }))

      const estudantes = [...resEstudantes]
      const docentes = [...resDocentes]

      return {
        docentes: docentes,
        estudantes: estudantes
      }
    }
}

export default DataBasedata;