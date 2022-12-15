import { Request, Response } from "express"
import { EstudanteDatabase } from "../data/EstudanteDatabase"

export const getEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.query.nome as string

        if(!nome){
            errorCode = 404
            throw new Error("Por Favor passar query!");
        }

        const estudanteDatabase = new EstudanteDatabase()

        const result = await estudanteDatabase.getAllNome(nome)
        res.status(200).send({ Estudante: result[0] })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}