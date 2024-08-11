import { Router } from "express";
import fs from 'fs'

const router = Router()
const productos = JSON.parse(fs.readFileSync('database/products.json', 'utf-8'));

router.get("/", (req, res) => {
    res.render('realtimeproducts', {
        productsList: productos
    })
})


export default router