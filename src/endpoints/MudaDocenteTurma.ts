import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"
import { TurmaDatabase } from "../data/TurmaDatabase"
import connection from "../data/connetion"

export const changeDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    const idDocente = req.params.id as string
    const turmaId = req.body.turma
    try {

        const docentes = new DocenteDatabase();

        const buscaDocente = await docentes.getAll()

        const resultDocente = buscaDocente.filter((i) => { return i.id === idDocente })

        if (resultDocente.length === 0) {
            errorCode = 422;
            throw new Error("Não possui esse estudante!");
        }

        const turmas = new TurmaDatabase();
        const buscaTurmas = await turmas.getAll()

        const resultTurmas = buscaTurmas.filter((i) => { return i.id === turmaId })

        if (resultTurmas.length === 0) {
            errorCode = 422;
            throw new Error("Não possui essa turma. Por favor verificar Id!");

        }
        await connection.raw(`
        UPDATE docente SET id_turma=${turmaId} WHERE id = ${idDocente};
        `)
  
        res.status(201).send({ message: "Docente mudou turma!" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}