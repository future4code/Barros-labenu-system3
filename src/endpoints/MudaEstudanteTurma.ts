import { Request, Response } from "express"
import { Estudante } from "../class/Estudante"

export const changeEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
            
        
        res.status(201).send({ message: "Usuário alterado" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}