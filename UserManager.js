class UserManager {
    static #users = [];
    create(data) {
        const user = {
            id: UserManager.#users.length === 0 ? 1 : UserManager.#users[UserManager.#users.length - 1].id+1,
            foto: data.foto,
            email: data.email,
            password: data.password,
            role: 0,
        };
        UserManager.#users.push(user);
        console.log("usuariocreado")
    }
   read(){
    return UserManager.#users
   }
}

const gestorDeUsuarios = new UserManager()
gestorDeUsuarios.create({
    foto: "agus.jpg",
    email: "agus@gmail.com",
    password: "pepe123"
})
gestorDeUsuarios.create({
    foto: "lau.jpg",
    email: "lau3@gmail.com",
    password: "pepo321"
})

console.log(gestorDeUsuarios.read())