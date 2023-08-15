import Products from "../Models/productsM.js";

// Rota PRODUTOS
const productsController = (server, db) => {
//get
server.get("/products", (req, res) => {
    res.send("Products test - GET")
});

//post
server.post("/products", (req, res) => {
    const {id, title, description, value} = req.body; //Conteúdo da requisição
    const newProduct = new Products(id, title, description, value); //Modelo de classe que vai criar um novo usuário
    res.json(newProduct); //Enviando a resposta em formato json()
});

//put
server.put("/products", (req, res) => {
    res.send("products test - PUT")
});

//delete
server.delete("/products", (req, res) => {
    res.send("products test - DELETE")
});
}

export default productsController;