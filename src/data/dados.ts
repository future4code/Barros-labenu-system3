import { Docente} from "../models/docente";
import { Especialidade } from "../models/especialidade";
import { Estudante } from "../models/estudante";
import { Hobby } from "../models/hobby";
import { hobbyEstudante } from "../models/hobbyEstudante";
import {EspecialidadeDocente} from "../models/especialidadeDocente";
import { turma } from "../models/turma";

export const estudante: Estudante[] = [
    {
        id: "1",
        nome: "Bianca Paccola",
        email: "bianca@labenu.com",
        data_nasc: "2022/03/28",
        turma_id: "1"
    },
    {
        id: "2",
        nome: "Samuel Garcia",
        email: "samuel@labenu.com",
        data_nasc: "2022/03/28",
        turma_id: "1"
    },
    {
        id: "3",
        nome: "Caroline Martins",
        email: "carol@labenu.com",
        data_nasc: "2022/03/28",
        turma_id: "1"
    }
]

export const docente: Docente[]=[
    {
        id:"1",
        nome: "Deia",
        email: "deia@labenu.com",
        data_nasc: "2022/01/01",
        turma_id:"1"
    },
    {
        id:"2",
        nome:"Junior",
        email:"juh@labenu.com",
        data_nasc:"2022/01/01",
        turma_id:"1"
    }
]

export const hobby: Hobby[] = [
    {
        id: "1",
        nome:"Estudar"
    },
    {
        id: "2",
        nome: "pedalar"
    }
]

export const estudanteHobby: hobbyEstudante[] = [
    {
        id:"1",
        id_estudante: "2",
        id_hobby: "2"
    },
    {
        id:"2",
        id_estudante:"3",
        id_hobby:"1"
    }
]

export const especialidade: Especialidade[] = [
    {
        id: "1",
        nome: "Javascript"
    },
    {
        id:"2",
        nome:"Typescript"
    },
    {
        id:"3",
        nome:'CSS'
    },
    {
        id:"4",
        nome: ""
    },
    {
        id:"5",
        nome:"POO"
    }
]

export const docenteEspecialidade: EspecialidadeDocente[] = [
    {
        id: "1",
        id_docente:"2",
        id_especialidade:"1"
    },
    {
        id:"2",
        id_docente:"1",
        id_especialidade: "3"
    }
]

export const Turma: turma[] = [
    {
        id: "1",
        nome:"Barros",
        modulo: "6"
    }
]