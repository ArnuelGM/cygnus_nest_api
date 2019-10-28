import { Schema } from 'mongoose';

export const ClienteSchema = new Schema({
    nombre: String,
    telefono: String,
    direccion: String,
    pendiente: Boolean,
});