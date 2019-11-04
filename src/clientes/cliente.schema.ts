import { Schema } from 'mongoose';

export const ClienteSchema = new Schema({
    _id: Schema.Types.ObjectId,
    nombre: String,
    telefono: String,
    direccion: String,
    pendiente: Boolean,
});
