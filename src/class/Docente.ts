import { Usuario } from "./Usuario";

export class Docente extends Usuario {
  especialidades: string[];
  constructor(
    id: string,
    nome: string,
    email: string,
    dataNascimento: Date,
    turma_id: string,
    especialidades: string[]
  ) {
    super(id, nome, email, dataNascimento, turma_id);
    this.especialidades = especialidades;
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
