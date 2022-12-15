import { Usuario } from "./Usuario";

export class Estudante extends Usuario { 
    hobbies: string[];
           constructor(id:string,nome:string,email:string,DataNascimento:Date,class_id:string,hobbies:string[]){
            super(id,nome,email,DataNascimento,class_id);
            this.hobbies = hobbies;
        }
}
