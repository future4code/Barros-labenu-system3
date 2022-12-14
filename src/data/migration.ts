import connection from "./connetion"
import estudante from "./estudante.json"
import turma from "./turma.json"
import hobby from "./hobby.json"
import hobbyEstudante from "./hobbyEstudante.json"
import docente from "./docente.json"
import especialidade from "./especialidade.json"
import docenteEspecialidade from "./docenteEspecialidade.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`

  CREATE TABLE turma(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    modulo VARCHAR(255) NOT NULL DEFAULT 0
);

  CREATE TABLE estudante(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(turma_id) REFERENCES turma(id)
 );
 
  CREATE TABLE hobby(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

  CREATE TABLE hobby_estudante(
    id VARCHAR(255) PRIMARY KEY,
    id_estudante VARCHAR(255) NOT NULL,
    id_hobby VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_estudante) REFERENCES estudante(id),
    FOREIGN KEY(id_hobby) REFERENCES hobby(id)
);

 CREATE TABLE docente(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    id_turma VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_turma) REFERENCES turma(id)
);



  CREATE TABLE especialidade(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

  CREATE TABLE docente_especialidade(
    id VARCHAR(255) PRIMARY KEY,
    id_docente VARCHAR(255) NOT NULL,
    id_especialidade VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_docente) REFERENCES docente(id),
    FOREIGN KEY (id_especialidade) REFERENCES especialidade(id)
)

 `)

  .then(() => { console.log("Tabela criada com sucesso!") })
  .catch(printError)

const insertTurma = () => connection("turma")
  .insert(turma)
  .then(() => { console.log("Turmas criadas com sucesso!") })
  .catch(printError)

const insertEstudante = () => connection("estudante")
  .insert(estudante)
  .then(() => { console.log("Estudante criados com sucesso!") })
  .catch(printError)

const insertHobby = () => connection("hobby")
  .insert(hobby)
  .then(() => { console.log("Hobby criados com sucesso!") })
  .catch(printError)

const insertHobbyEstudante = () => connection("hobby_estudante")
  .insert(hobbyEstudante)
  .then(() => { console.log("Hobby inserido com sucesso!") })
  .catch(printError)

const insertDocente = () => connection("docente")
  .insert(docente)
  .then(() => { console.log("Docente inserido com sucesso!") })
  .catch(printError)

const insertEspecialidade = () => connection("especialidade")
  .insert(especialidade)
  .then(() => { console.log("Especialidade criada com sucesso!") })
  .catch(printError)

const insertEspecialidadeDocente = () => connection("docente_especialidade")
  .insert(docenteEspecialidade)
  .then(() => { console.log("Especialidade inserida com sucesso!") })
  .catch(printError)

const fimConeccao = () => {
  console.log("Inserido ao banco com sucesso!");
  connection.destroy()

}

createTables()
  .then(insertTurma)
  .then(insertEstudante)
  .then(insertHobby)
  .then(insertHobbyEstudante)
  .then(insertDocente)
  .then(insertEspecialidade)
  .then(insertEspecialidadeDocente)
  .finally(fimConeccao)