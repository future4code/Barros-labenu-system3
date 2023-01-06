import { Request, Response } from "express"
import connection from "../data/connetion"

export const getEspecialidades = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection.select().from('especialidade')

        res.status(200).send(result)
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}