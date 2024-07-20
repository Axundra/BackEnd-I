import { Router } from "express";

const router = Router()

router.post("/", (req, res) => {
    const ID = Date.now(),      //genera ID en base a la fecha
        body = req.body;
    carrito.push([{ id: ID, products: [body] }])
    res.json(carrito)
})

router.get("/:cartID", (req, res) => {
    const find = carrito.find((el => el.id == Number(req.params.cartID)))
    res.json(find.products)
})

router.post("/:cartID/product/:productID", (req, res) => {
    const Cfind = carrito.find(el => el.id == Number(req.params.cartID))   //busca el ID de compra
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

        res.json({ carrito })
    }else{//si el ID de compra no existe
        res.status(500).json({"Error": "ID de transaccion inexistente"})
    }
})

export default router