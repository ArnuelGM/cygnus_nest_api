import { Document } from 'mongoose';

export interface Cliente extends Document {
    nombre: string;
    telefono: string;
    direccion: string;
    pendiente: boolean;
}
