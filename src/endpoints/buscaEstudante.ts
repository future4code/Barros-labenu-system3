import { Request, Response } from "express"
import { EstudanteDatabase } from "../data/EstudanteDatabase"

export const getEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const estudanteDatabase = new EstudanteDatabase()
        const result = await estudanteDatabase.getAll()
        res.status(200).send({ products: result })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}