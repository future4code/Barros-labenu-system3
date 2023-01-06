import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"

export const changeDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    const id = req.params.id
    const turma = req.body.turma
    try {
        if (!turma) {
            errorCode = 422
            throw new Error("Deve informar o id da nova turma.");   
        }
        const docentes = new DocenteDatabase();
        const buscaDocente = await docentes.get(id);

        if(buscaDocente.length  === 0) {
            errorCode = 404
            throw new Error("ID do docente não encontrado.");
        }
        const setDocente = new DocenteDatabase()
        await setDocente.set(id, {id_turma:turma});

        res.status(201).send({ message: "Turma do docente alterado" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}