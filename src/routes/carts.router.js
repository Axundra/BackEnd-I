import { Router } from "express"
import fs from 'fs'

const router = Router(),
    cart = JSON.parse(fs.readFileSync('database/cart.json', 'utf-8'));


//no lo pedía la consigna pero mepareció bien ponerlo
router.get('/', (req, res) => {
    res.json(cart)
})




//crear carrito nuevo
router.post("/", (req, res) => {
    const ID = Date.now()      //genera ID en base a la fecha

    cart.push({ id: ID, products: [] })

    fs.writeFileSync('database/cart.json', JSON.stringify(cart))
    res.json(cart)
})



//buscar carrito por ID
router.get("/:cartID", (req, res) => {
    const find = cart.find((el => el.id == Number(req.params.cartID)))
    res.json(find.products)
})



//añadir producto al carrito específico o aumentar su cantidad
router.post("/:cartID/product/:productID", (req, res) => {
    const Cfind = cart.find(el => el.id == Number(req.params.cartID))   //busca el ID de compra
    if (Cfind) {//chekea si existe la orden de compra
        const prodID = Number(req.params.productID),
            findd = Cfind.products.find(el2 => el2.productID == prodID)         //busca el producto dentro de la lista filtrada por ID para después aumentar su cantidad

        if (findd) {    //chekea si ya existe un producto con ese ID
            findd.cantidad++
        } else {        //si no añade un nuevo producto 
            Cfind.products.push({
                productID: prodID,
                cantidad: 1,
                propiedad: "nuevo"
            })
        }

        fs.writeFileSync('database/cart.json', JSON.stringify(cart))
        res.json({ cart })
    } else {//si el ID de compra no existe
        res.status(500).json({ "Error": "ID de transaccion inexistente" })
    }
})

export default router