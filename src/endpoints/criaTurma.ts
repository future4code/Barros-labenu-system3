import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"
import { Turma } from "../class/Turma"

export const createTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        // const docentes = req.body.docentes
        // const estudantes = req.body.estudantes
        // const modulo = req.body.modulo

        if (!nome) {
            throw new Error("Body inválido.")
        }

        const turma = new Turma(
            Date.now().toString(),
            nome,
          
        );
  
       const turmaDatabase = new TurmaDatabase()
       const result = await turmaDatabase.create(turma)
   
        res.status(201).send({ message: "Turma criada!", turma:result })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}