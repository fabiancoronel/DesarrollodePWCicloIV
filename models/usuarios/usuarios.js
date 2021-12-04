import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
 correo: {
     type: String,
     required: true,
     validate: {
        validator: (email) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);},
       
          message: 'El formato del correo electrónico está malo.',
 }},
 identificacion: {
     type: String,
     required: true,
     unique: true,
 },
 nombre: {
     type: String,
     required: true,
 },
 apellido: {
    type: String,
    required: true,
 },
rol: {
    type: String,
    required: true,
    enum_Rol: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
  },
estado: {
   type: String,
   enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
   default: "PENDIENTE",
  }

 });

const UserModel = model('usuario', userSchema);

export { UserModel };