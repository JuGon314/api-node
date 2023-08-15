import express from "express"; //Por causa do type:modulo no arquivo package.json
import db from "./Data/sqlite.js" //Importando o banco de dados
const server = express(); //Colocando o server numa const par apoder usar depois;

import User from "./Models/usersM.js" //Importando o modelo de classe

//MIDDLEWARE
server.use(express.json()); //Toda vez que a API for utilizada, será solicitado ao express que transforme todas as requisições em arquivos .json

//ROTAS
import usersController from "./Controllers/usersC.js";
usersController(server, db);

import productsController from "./Controllers/productsC.js";
productsController(server, db);

//Default - rota padrão **O método use() vai funcionar todas as vezes que a API for utilizada;
server.use((req, res) => {
    res.status(404).send("Page not found");
})

server.listen(3000, () => {
    console.log("API working on http://localhost:3000")
});

//1:07:00 - Revisão node&express