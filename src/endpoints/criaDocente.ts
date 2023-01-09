import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"
import { Docente } from "../class/Docente"
import { EspecialidadesDatabase } from "../data/EspecialidadesDatabase"
import {EspecialidadeDocenteDatabase} from "../data/EspecialidadeDocenteDatabase"

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

        //Lógica para verificar se todos os id's de especialidades existem, se algum não for encontrado já retorna o erro.
        const buscaEspecialidade = new EspecialidadesDatabase()
        for (let i = 0; i < especialidades.length; i++) {
            const especialidadeId = await buscaEspecialidade.getById(especialidades[i]);
            
            if(especialidadeId.length === 0) {
                throw new Error("Especialidade não encontrada");
            }
        }
        
        const docente = new Docente(
            Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id,   
            especialidades
        );

        
        //Criando novo objeto para inserir na tabela de docente
        const docenteDatabase = new DocenteDatabase()
        const docenteTabela = {
            id: await docente.getId(),
            nome: await docente.getNome(),
            email: await docente.getEmail(),
            data_nasc: await docente.getDataNascimento(),
            id_turma: await docente.getTurmaId(), 
        }
        console.log(docenteTabela)
        await docenteDatabase.create(docenteTabela)
        
        //Criando nova Especialidade para inserir na tabela de Especialidades
        const especialidade = new EspecialidadeDocenteDatabase()
        for (let i = 0; i < especialidades.length; i++) {
            const especialidadesDocenteTabela = {
                id: Date.now().toString(),
                id_docente: docenteTabela.id,
                id_especialidade: especialidades[i]
            }
            await especialidade.create(especialidadesDocenteTabela)
        }

        res.status(201).send({ message: "Usuário docente criado", docente: docente })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}