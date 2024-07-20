import express from 'express'
import ProductsRoute from './routes/products.router.js'
import CartRoute from './routes/carts.router.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', ProductsRoute)
app.use('/api/carts', CartRoute)

app.listen(8080, () => {
    console.log('mondongo');
})