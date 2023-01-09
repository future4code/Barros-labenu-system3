import { Request, Response } from "express"
import connection from "../data/connection"
import { EstudanteDatabase } from "../data/EstudanteDatabase"
import { TurmaDatabase } from "../data/TurmaDatabase"

export const changeEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    const idEstudante = req.params.id as string
    const turmaId = req.body.turma
    try {
        const estudantes = new EstudanteDatabase();

        const estudante = await estudantes.getAll()

        const resultEstudante = estudante.filter((i) => { return i.id === idEstudante })

        if (resultEstudante.length === 0) {
            errorCode = 422;
            throw new Error("Não possui esse estudante!");
        }

        const turmas = new TurmaDatabase();
        const listaTurmas = await turmas.getAll()

        const resultTurmas = listaTurmas.filter((i) => { return i.id === turmaId })

        if (resultTurmas.length === 0) {
            errorCode = 422;
            throw new Error("Não possui essa turma. Por favor verificar Id!");

        }
        await connection.raw(`
        UPDATE estudante SET turma_id=${turmaId} WHERE id = ${idEstudante};
        `)

        res.status(201).send(`Modificado com sucesso!!`)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}