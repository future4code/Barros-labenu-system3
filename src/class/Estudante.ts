import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
    hobbies: string[];
    constructor(
        id: string,
        nome: string,
        email: string,
        DataNascimento: Date,
        turma_id: string,
        hobbies: string[]
    ) {
        super(id, nome, email, DataNascimento, turma_id);
        this.hobbies = hobbies;
    }
    public async getId() {
        return this.id;
    }

    public async getNome() {
        return this.nome;
    }

    public async getEmail() {
        return this.email;
    }

    public async getDataNascimento() {
        return this.dataNascimento;
    }

    public async getTurmaId() {
        return this.turma_id;
    }
}
