import express from 'express'
import ProductsRoute from './routes/products.router.js'
import CartRoute from './routes/carts.router.js'
import RTProductsRoute from './routes/realtimeproducts.router.js'
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'

const app = express();
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', ProductsRoute)
app.use('/api/carts', CartRoute)
app.use('/api/realtimeproducts', RTProductsRoute)


app.listen(8080, () => {
    console.log('mondongo');
})