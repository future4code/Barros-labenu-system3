import { Request, Response } from "express"
import { EstudanteDatabase } from "../data/EstudanteDatabase"
import { Estudante } from "../class/Estudante"

export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const email = req.body.email
        const dataNascimento = req.body.dataNascimento
        const turma_id = req.body.turma_id
        const hobby = req.body.hobby

        if (!nome || !email || !dataNascimento || !turma_id || !hobby) {
            throw new Error("Body inválido.")
        }

        const estudante = new Estudante(
            Date.now().toString(),
            nome,
            email,
            dataNascimento,
            turma_id,   
            hobby
        );

        const estudanteDatabase = new EstudanteDatabase()
        await estudanteDatabase.create(estudante)
        
        
        res.status(201).send({ message: "Usuário estudante criado", estudante:estudante })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}