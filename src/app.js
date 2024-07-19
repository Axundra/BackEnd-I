import express from 'express'
import ProductsRoute from './routes/products.router.js'
import CartRoute from './routes/cart.router.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use('/products', ProductsRoute)
//app.use('/cart', CartRoute)

let productos = [{
    id: 0,
    title: "",
    description: "",
    code: "",
    price: 0,
    status: true,
    stock: 0,
    category: "",
    propiedad: "default"
}, {
    id: 1,
    title: "",
    description: "",
    code: "",
    price: 0,
    status: false,
    stock: 0,
    category: "",
    propiedad: "default"
}];


app.get("/api/products/", (req, res) => {                //get p/
    res.json({ ...productos })
})

app.get("/api/products/:productID", (req, res) => {     //get p/productID
    const find = productos.find((el => el.id == Number(req.params.productID)))
    res.json(find)
})

app.post("/api/products/", (req, res) => {               //post p/
    const ID = Number(productos.reduce((max, el) => (el.id > max ? el.id : max), -Infinity)) + 1 //ID autogenerado en base al numero maximo de ID disponible en la BBDD
    const body = req.body
    productos.push({ id: String(ID), ...body })
    res.json({ ...productos })
})

app.put("/api/products/:productID", (req, res) => {      //put p/productID
    const find = productos.find((el => el.id == Number(req.params.productID)))
    const update = req.body;

    Object.assign(find, update)
    res.json({ ...productos })
})

app.delete("/api/products/:productID", (req, res) => {       //delete p/productID
    productos = productos.filter(el => el.id !== Number(req.params.productID))
    res.json({ ...productos })
})

///////////////////////////////////////////////////////////////////////////////////

let carrito = [{
    id: 123,
    products: [
        { productID: 1, cantidad: 2, propiedad: "default" },
        { productID: 2, cantidad: 345, propiedad: "default" }
    ]
}]

app.post("/api/carts/", (req, res) => {
    const ID = Date.now(),
        body = req.body;
    carrito.push([{ id: ID, products: [body] }])
    res.json(carrito)
})

app.get("/api/carts/:cartID", (req, res) => {
    const find = carrito.find((el => el.id == Number(req.params.cartID)))
    res.json(find)
})

app.post("/api/carts/:cartID/product/:productID", (req, res) => {
    const Cfind = carrito.find((el => el.id == Number(req.params.cartID))),
        Pfind = productos.find((el => el.id == Number(req.params.productID)));
    
    Cfind.products.push({ productID: Pfind.id, cantidad: 0, propiedad: "añadido" })
    res.json(carrito)
})

app.listen(8080, () => {
    console.log('mondongo');
})