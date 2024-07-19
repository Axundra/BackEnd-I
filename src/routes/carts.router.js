import { Router } from "express";

const router = Router()

router.post("/", (req, res) => {
    const ID = Date.now(),
        body = req.body;
    carrito.push([{ id: ID, products: [body] }])
    res.json(carrito)
})

router.get("/:cartID", (req, res) => {
    const find = carrito.find((el => el.id == Number(req.params.cartID)))
    res.json(find)
})

router.post("/:cartID/product/:productID", (req, res) => {
    const Cfind = carrito.find((el => el.id == Number(req.params.cartID))),
        Pfind = productos.find((el => el.id == Number(req.params.productID)));
    
    Cfind.products.push({ productID: Pfind.id, cantidad: 0, propiedad: "añadido" })
    res.json(carrito)
})

export default router