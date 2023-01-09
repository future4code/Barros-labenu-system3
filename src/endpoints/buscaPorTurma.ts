import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"

export const buscaPorTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    const id = req.params.id as string
    try {

        const buscaTurma = new TurmaDatabase()
        const result = await buscaTurma.buscaPorTurma(id)

        res.status(200).send(result)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}