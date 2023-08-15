import User from "../Models/usersM.js"

// Rota USUÁRIOS
const usersController = (server) => {
//get
server.get("/users", (req, res) => {
    res.send("Users test - GET")
});

//post
server.post("/users", (req, res) => {
    const {id, name, email, password} = req.body; //Conteúdo da requisição
    const newUser = new User(id, name, email, password); //Modelo de classe que vai criar um novo usuário
    res.json(newUser); //Enviando a resposta em formato json()
});

//put
server.put("/users", (req, res) => {
    res.send("users test - PUT")
});

//delete
server.delete("/users", (req, res) => {
    res.send("users test - DELETE")
});
}

export default usersController;