import { Router } from "express";
import fs from 'fs'

const router = Router()
let productos = JSON.parse(fs.readFileSync('database/products.json', 'utf-8'));


//muestra todos los productos
router.get("/", (req, res) => {
    res.json({ ...productos })
})


//muestra un solo producto por ID
router.get("/:productID", (req, res) => {
    const find = productos.find((el => el.id == Number(req.params.productID)))

    res.json(find)
})


//agrega productos con ID incremental en base al N° de ID más grande
router.post("/", (req, res) => {
    const ID = productos.reduce((max, el) => (el.id > max ? el.id : max), -Infinity) + 1 //ID autogenerado en base al numero maximo de ID disponible en la BBDD
    const { title, description, code, price, status, stock, category, propiedad } = req.body
    //                                                                                              ↓ True por defecto
    productos.push({
        id: ID,
        title,
        description,
        code,
        price,
        status: (status == false ? false : true),
        stock,
        category,
        propiedad: "nuevo"
    })
    fs.writeFileSync('database/products.json', JSON.stringify(productos))

    res.json({ ...productos })
})


//actualiza valores de un solo producto
router.put("/:productID", (req, res) => {
    const find = productos.find((el => el.id == Number(req.params.productID)))
    const update = req.body;

    Object.assign(find, update)
    fs.writeFileSync('database/products.json', JSON.stringify(productos))

    res.json({ ...productos })
})


//borra un producto
router.delete("/:productID", (req, res) => {
    productos = productos.filter(el => el.id !== Number(req.params.productID))//crea una nueva lista sin el producto que se quiere borrar

    fs.writeFileSync('database/products.json', JSON.stringify(productos))

    res.json({ ...productos })
})

export default router