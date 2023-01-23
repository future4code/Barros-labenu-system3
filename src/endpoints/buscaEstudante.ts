import { Request, Response } from "express"
import { EstudanteDatabase } from "../data/EstudanteDatabase"

export const getEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    let result;
    try {
        const nome = req.query.nome as string
        const estudanteDatabase = new EstudanteDatabase()

        if(nome){
            result = await estudanteDatabase.getAllNome(nome)
            result = result[0]
        } else {
            result = await estudanteDatabase.getAll()
        }


        res.status(200).send({ Estudante: result })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}