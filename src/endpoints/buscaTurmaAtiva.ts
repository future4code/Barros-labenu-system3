import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"

export const getTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const turmaDatabase = new TurmaDatabase()
        const result = await turmaDatabase.getAll()
        res.status(200).send({ products: result })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}