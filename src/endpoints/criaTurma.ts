import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"
import { Turma } from "../class/Turma"

export const createTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const docentes = req.body.docentes
        const estudantes = req.body.estudantes
        const modulo = req.body.modulo

        if (!nome || !docentes || !estudantes || !modulo) {
            throw new Error("Body inválido.")
        }

        const turma = new Turma(
            Date.now().toString(),
            nome,
            docentes,
            estudantes,
            modulo
        );

        const turmaDatabase = new TurmaDatabase()
        await turmaDatabase.create(turma)
        
        
        res.status(201).send({ message: "Turma criada!", turma:turma })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}