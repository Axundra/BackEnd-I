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
    propiedad: "HardCodeado"
}, {
    id: 1,
    title: "",
    description: "",
    code: "",
    price: 0,
    status: false,
    stock: 0,
    category: "",
    propiedad: "HardCodeado"
}];

global.carrito = [{
    id: 0,
    products: [
        { productID: 5, cantidad: 4, propiedad: "HardCodeado" },
        { productID: 2, cantidad: 5, propiedad: "HardCodeado" }
    ]
},{
    id: 1,
    products: [
        { productID: 0, cantidad: 3, propiedad: "HardCodeado" },
        { productID: 4, cantidad: 2, propiedad: "HardCodeado" }
    ]
}]

app.listen(8080, () => {
    console.log('mondongo');
})