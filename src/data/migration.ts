import connection from "./connetion"
import { docente, docenteEspecialidade, especialidade, estudante, estudanteHobby, hobby, Turma } from "./dados"
// import estudante from "./estudante.json"
// import turma from "./turma.json"
// import hobby from "./hobby.json"
// import hobbyEstudante from "./hobbyEstudante.json"
// import docente from "./docente.json"
// import especialidade from "./especialidade.json"
// import docenteEspecialidade from "./docenteEspecialidade.json"
import { TABLE_CLASS, TABLE_HOBBY, TABLE_HOBBY_STUDENT, TABLE_INSTRUCTOR, TABLE_INSTRUCTOR_SPEC, TABLE_SPECIALTY, TABLE_STUDENT } from "./tableNames"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = async () => {await connection.raw(`

  DROP TABLE IF EXISTS ${TABLE_STUDENT},${TABLE_CLASS},${TABLE_INSTRUCTOR_SPEC},${TABLE_INSTRUCTOR},${TABLE_SPECIALTY},${TABLE_HOBBY},${TABLE_HOBBY_STUDENT}

  CREATE TABLE ${TABLE_CLASS}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255)  NOT NULL UNIQUE,
    modulo VARCHAR(255) DEFAULT 0
);

  CREATE TABLE ${TABLE_STUDENT}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc VARCHAR(255) NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(turma_id) REFERENCES ${TABLE_CLASS}(id)
 );
 
  CREATE TABLE ${TABLE_HOBBY}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

  CREATE TABLE ${TABLE_HOBBY_STUDENT}(
    id VARCHAR(255) PRIMARY KEY,
    id_estudante VARCHAR(255) NOT NULL,
    id_hobby VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_estudante) REFERENCES ${TABLE_STUDENT}(id),
    FOREIGN KEY(id_hobby) REFERENCES ${TABLE_HOBBY}(id)
);

 CREATE TABLE ${TABLE_INSTRUCTOR}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc VARCHAR(255) NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(turma_id) REFERENCES ${TABLE_CLASS}(id)
);


  CREATE TABLE ${TABLE_SPECIALTY}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

  CREATE TABLE ${TABLE_INSTRUCTOR_SPEC }(
    id VARCHAR(255) PRIMARY KEY,
    id_docente VARCHAR(255) NOT NULL,
    id_especialidade VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_docente) REFERENCES ${TABLE_INSTRUCTOR}(id),
    FOREIGN KEY (id_especialidade) REFERENCES ${TABLE_SPECIALTY}(id)
)

 `)
 .then(() => { console.log("Tabela criada com sucesso!") })
 .catch(printError)
}

const insertTurma = async () => await connection(TABLE_CLASS)
  .insert(Turma)
  .then(() => { console.log("Turmas criadas com sucesso!") })
  .catch(printError)

const insertEstudante = async () => await connection(TABLE_STUDENT)
  .insert(estudante)
  .then(() => { console.log("Estudante criados com sucesso!") })
  .catch(printError)

const insertHobby = async () => await connection(TABLE_HOBBY)
  .insert(hobby)
  .then(() => { console.log("Hobby criados com sucesso!") })
  .catch(printError)

const insertHobbyEstudante = async () => await connection(TABLE_HOBBY_STUDENT )
  .insert(estudanteHobby)
  .then(() => { console.log("Hobby inserido com sucesso!") })
  .catch(printError)

const insertDocente = async () => await connection(TABLE_INSTRUCTOR)
  .insert(docente)
  .then(() => { console.log("Docente inserido com sucesso!") })
  .catch(printError)

const insertEspecialidade = async () => await connection(TABLE_SPECIALTY)
  .insert(especialidade)
  .then(() => { console.log("Especialidade criada com sucesso!") })
  .catch(printError)

const insertEspecialidadeDocente = async () => await connection(TABLE_INSTRUCTOR_SPEC)
  .insert(docenteEspecialidade)
  .then(() => { console.log("Especialidade inserida com sucesso!") })
  .catch(printError)

const fimConeccao = async () => {
  console.log("Fim do banco de dados!");
  await connection.destroy()

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