import { Request, Response } from "express"
import { Turma } from "../class/Turma"
import DataBasedata from "../data/DataBasedata"
import { TurmaDatabase } from "../data/TurmaDatabase"

export const changeTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    const id = req.params.id
    const modulo = req.body.modulo
    try {
        if (!modulo) {
            errorCode = 422
            throw new Error("Deve informar o módulo a ser alterado.");   
        }

        const turmas = new TurmaDatabase();
        const buscaTurmas = await turmas.get(id);

        if (buscaTurmas.length === 0) {
            errorCode = 404
            throw new Error("Id de turma não encontrado."); 
        }

        const setTurma = new TurmaDatabase()

        await setTurma.set(id, {modulo: modulo});

        res.status(201).send({ message: "Turma alterada" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}