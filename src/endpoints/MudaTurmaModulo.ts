import { Request, Response } from "express"
import { Turma } from "../class/Turma"

export const changeTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
            
        
        res.status(201).send({ message: "Turma alterada" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}