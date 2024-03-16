class ProductManager{
    static #products = [];
    create(data) {
        const product = {
            id: ProductManager.#products.length === 0 ? 1 : ProductManager.#products[ProductManager.#products.length - 1].id+1,
            title : data.title,
            photo: data.photo,
            category : data.category,
            price : data.price,
            stock : data.stock
        };
        ProductManager.#products.push (product);
        console.log("productocreado")
    }
   read(){
    return ProductManager.#products
   }
}

const gestorDeProductos = new ProductManager()
gestorDeProductos.create({
    title : "zapatilla",
    photo: "zapatilla.jpg",
    category : "calzado",
    price : 90000,
    stock : 100
}) 
gestorDeProductos.create({
    title : "celular",
    photo: "celular.jpg",
    category : "smartphone",
    price : 900000,
    stock : 1000
}) 
gestorDeProductos.create({
    title : "sillon",
    photo: "sillon.jpg",
    category : "mueble",
    price : 100000,
    stock : 10
}) 
gestorDeProductos.create({
    title : "botines",
    photo: "botines.jpg",
    category : "calzado",
    price : 10000,
    stock : 100
}) 

console.log(gestorDeProductos.read())