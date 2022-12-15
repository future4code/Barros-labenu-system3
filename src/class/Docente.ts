import { Usuario } from "./Usuario";

export class Docente extends Usuario {
        especialidades: string[];
        constructor(id: string,nome:string,email:string,dataNascimento:Date,turma_id:string,especialidades:string[]){
            super(id,nome,email,dataNascimento,turma_id);
            this.especialidades = especialidades;
        }

}
