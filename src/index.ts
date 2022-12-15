import express, { Express } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { getEstudante } from "./endpoints/buscaEstudante";
import { getPing } from "./endpoints/ping";

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
// endpoint buscar estudantes
app.get("/estudante",getEstudante)

app.get("/ping",getPing)