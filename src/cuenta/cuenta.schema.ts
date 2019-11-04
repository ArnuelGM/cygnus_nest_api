import { Schema } from 'mongoose';

export const CuentaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    idCliente: Schema.Types.ObjectId,
    capital: Number,
    fecha: Date,
    interesMensual: Number,
});
