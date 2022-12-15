export abstract class Usuario {
    protected id: string;
    protected nome: string;
    protected email: string;
    protected dataNascimento: Date;
    protected turma_id: string;
    constructor(id: string,nome: string,email: string,dataNascimento: Date,turma_id: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.turma_id = turma_id;
    }
  
}
