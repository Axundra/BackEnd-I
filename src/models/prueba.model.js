import { Schema, model } from "mongoose";

const usuariosData = new Schema({
    nombre: String,
    apellido: String,
    e_mail : String
})

export const userModel = model("coleccion", usuariosData);

//en el endpoint async ↓

const usariosImportados = await userModel.find();
res.json({ payload: usuarios })


mongoose.conect
