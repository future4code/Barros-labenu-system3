import { Request, Response } from "express"
import { EstudanteDatabase } from "../data/EstudanteDatabase"

export const changeEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    const id = req.params.id
    const turma = req.body.turma
    try {
        if (!turma) {
            errorCode = 422
            throw new Error("Deve informar o id da nova turma.");   
        }
        const estudantes = new EstudanteDatabase();
        const buscaEstudante = await estudantes.get(id);

        if(buscaEstudante.length  === 0) {
            errorCode = 404
            throw new Error("ID do estudante não encontrado.");
        }
        const setEstudante = new EstudanteDatabase()
        await setEstudante.set(id, {turma_id:turma});

        res.status(201).send({ message: "Turma do estudante alterado" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}