import { Document } from 'mongoose';

export interface Cuenta extends Document {
    idCliente: string;
    capital: number;
    fecha: number;
    interesMensual: number;
}
