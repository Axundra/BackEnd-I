import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.json({ ...productos })
})

router.get("/:productID", (req, res) => {
    const find = productos.find((el => el.id == Number(req.params.productID)))
    res.json(find)
})

router.post("/", (req, res) => {
    const ID = Number(productos.reduce((max, el) => (el.id > max ? el.id : max), -Infinity)) + 1 //ID autogenerado en base al numero maximo de ID disponible en la BBDD
    const body = req.body
    productos.push({ id: String(ID), ...body })
    res.json({ ...productos })
})

router.put("/:productID", (req, res) => {
    const find = productos.find((el => el.id == Number(req.params.productID)))
    const update = req.body;

    Object.assign(find, update)
    res.json({ ...productos })
})

router.delete("/:productID", (req, res) => {
    productos = productos.filter(el => el.id !== Number(req.params.productID))
    res.json({ ...productos }) 
})

export default router