import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"
import { Docente } from "../class/Docente"

export const createDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const email = req.body.email
        const data_nasc = req.body.data_nasc
        const turma_id = req.body.turma_id
        const especialidades = req.body.especialidades

        if (!nome || !email || !data_nasc || !turma_id || !especialidades) {
            throw new Error("Body inválido.")
        }

        const docente = new Docente(
            Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id,   
            especialidades
        );

        const docenteDatabase = new DocenteDatabase()
        await docenteDatabase.create(docente)
        
        
        res.status(201).send({ message: "Usuário docente criado", docente: docente })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}