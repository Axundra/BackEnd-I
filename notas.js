//npm i express nodemon express-handlebars socket.io

import express from 'express'
import __dirname from './utils.js'
import router from './src/routes/products.router.js';

const app = express();

app.use(express.json())//interpretacion de JSON
app.use(express.urlencoded({ extended: true }))//interpretacion de algo
app.use('/ruta', RutaImportada)//para hacer rutas en archivos separados
app.use(express.static(__dirname + '/public'))//para archivos estaticos que requiera el cliente


app.listen(8000, () => {// esto al final
    console.log('bla bla')
})

app.get("/usuarios/:id/:apellido", (req, res) => {
    res.send(texto / HTML)
    res.json()
    res.render(HTML)

    req.query //← toma el parametro de la url (ej: .../usuarios?nombre=potacio&edad=20)           devuelve { nombre: 'potacio', edad: '20'}
    const { nombre, edad } = req.query;

    req.params //← toma el parametro de la url (ej: .../usuarios/2/Guz)              devuelve { id: '2', apellido: 'Guz' }

})

//se puede:          ↓         ↓
app.get('/usuario/:nombre/descripcion', (req, res) => {
    const { modoOscuro } = req.query
})

//noentiendo esto:
router.get('/', (req, res, next) => {
    next()

}, (req, res) => {
    console.log(req + res);
})


router.get('/', (err, req, res, next) => {
    next()

}, (req, res) => {
    console.log(req + res);
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                              HANDLEBARS                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'

app.engine('handlebars', handlebars.engine())   //←tipo de motor de plantilla
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')            //←segundo parametro igual al primero de app.engine

//se crea un archivo main.handlebars dentro de src/views/layout ↓

//<!DOCTYPE html>
//<html lang="sp">
//    <head>
//        <meta charset="UTF-8" name="viewport" content="width = device-width, initial-scale = 1.0">
//    </head>
//    <body>
//        {{{body}}} {{!-- hace referencia al contenido de las distintas views --}}
//    </body>
//</html>

app.get('/', (req, res) => {
    res.render('ejemplo',{//    ejemplo es el nombre del archivo handlebars
        nombre: "potacio",
        apellido: "tilin",
        booleano: true
    })
})

//<div>
//    <p> mi nombre es {{nombre}} {{apellido}} </p>
//</div>      (solo 2 llaves    ↑)

//se muestra "mi nombre es potacio tilin"








