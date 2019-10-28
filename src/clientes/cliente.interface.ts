import { Document } from 'mongoose';

export interface Cliente extends Document {
    id?: string;
    nombre: string;
    telefono: string;
    direccion: string;
    pendiente: boolean;
}