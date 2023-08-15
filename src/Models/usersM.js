class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

//Podemos exporta de duas formas: 
//1ª: colocar a palavra export na frente do objeto que se quer exportar. Ex: export class User{...}
//2º: fazer o export por default. Ex: export default User

export default User