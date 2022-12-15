import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"

export const getDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const docenteDatabase = new DocenteDatabase()
        const result = await docenteDatabase.getAll()
        res.status(200).send({ products: result })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}