import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"
import { Docente } from "../class/Docente"

export const changeDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
           
        
        res.status(201).send({ message: "Usuário alterado" })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}