import express, { Express } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { getEstudante } from "./endpoints/buscaEstudante";
import { getPing } from "./endpoints/ping";
import { getTurma } from "./endpoints/buscaTurmaAtiva";
import { getDocente } from "./endpoints/buscaDocente";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("failure upon starting server");
    }
})
//endpoint DE TESTE
app.get("/ping",getPing)

// endpoint buscar estudantes
app.get("/estudante",getEstudante)

//ENDPOINT BUSCAR TURMA
app.get("/turma",getTurma)

//ENDPOINT BUSCAR DOCENTE
app.get("/docente", getDocente)