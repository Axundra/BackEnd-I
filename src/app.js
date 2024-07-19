import express from 'express'
import ProductsRoute from './routes/products.router.js'
import CartRoute from './routes/carts.router.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', ProductsRoute)
app.use('/api/carts', CartRoute)


global.productos = [{
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

global.carrito = [{
    id: 123,
    products: [
        { productID: 1, cantidad: 2, propiedad: "default" },
        { productID: 2, cantidad: 345, propiedad: "default" }
    ]
}]

app.listen(8080, () => {
    console.log('mondongo');
})