import { IsString, IsNotEmpty, IsUUID, IsPhoneNumber, IsOptional, IsBooleanString } from 'class-validator';

export class ClienteDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString({ message: 'Debe ser un nombre de persona válido.'})
    @IsNotEmpty({
        message: 'No puede estar vacio.',
    })
    nombre: string;

    @IsNotEmpty({ message: 'No puede estar vacio.'})
    @IsPhoneNumber('CO', { message: 'Debe ser un número de telefono válido'})
    telefono: string;

    @IsOptional()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsBooleanString()
    pendiente: boolean;
}
