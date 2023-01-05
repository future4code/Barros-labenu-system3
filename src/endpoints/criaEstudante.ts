import { Request, Response } from "express"
import { EstudanteDatabase } from "../data/EstudanteDatabase"
import { Estudante } from "../class/Estudante"
import { HobbyDatabase } from "../data/HobbyDatabase"
import { HobbyEstudanteDataBase } from "../data/HobbyEstudanteDataBase"

export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const email = req.body.email
        const dataNascimento = req.body.dataNascimento
        const turma_id = req.body.turma_id
        const hobby = req.body.hobby

        if (!nome || !email || !dataNascimento || !turma_id || !hobby) {
            throw new Error("Body inválido.")
        }

        //Lógica para verificar se todos os id's de hobbys existem, se algum não for encontrado já retorna o erro.
        const buscaHobby = new HobbyDatabase()
        for (let i = 0; i < hobby.length; i++) {
            const hobbyId = await buscaHobby.getById(hobby[i]);

            if (hobbyId.length === 0) {
                throw new Error("Especialidade não encontrada");
            }
        }

        const estudante = new Estudante(
            Date.now().toString(),
            nome,
            email,
            dataNascimento,
            turma_id,
            hobby
        );

        const estudanteDatabase = new EstudanteDatabase()

        const estudanteTabela = {
            id: await estudante.getId(),
            nome: await estudante.getNome(),
            email: await estudante.getEmail(),
            data_nasc: await estudante.getDataNascimento(),
            turma_id: await estudante.getTurmaId(),
        }
        console.log(estudanteTabela)

        await estudanteDatabase.create(estudanteTabela)

        const hobbies = new HobbyEstudanteDataBase()
        for (let i = 0; i < hobby.length; i++) {
            const hobbiesTabela = {
                id: Date.now().toString(),
                id_estudante: estudanteTabela.id,
                id_hobby: hobby[i]
            }
            await hobbies.create(hobbiesTabela)
        }


        res.status(201).send({ message: "Usuário estudante criado", estudante: estudante })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}