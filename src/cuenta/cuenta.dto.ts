import { IsNotEmpty, IsNumber, IsDate, IsDecimal, IsUUID, IsOptional, IsNumberString, IsCurrency, IsDateString, IsMongoId } from 'class-validator';

export class CuentaDto {
    @IsOptional()
    @IsUUID()
    id: string;

    @IsMongoId()
    @IsNotEmpty({ message: 'Este campo no puede estar vacio y debe ser un id de cliente válido' })
    idCliente: string;

    @IsNotEmpty()
    @IsCurrency()
    capital: number;

    @IsNotEmpty()
    fecha: string;

    @IsOptional()
    @IsDecimal()
    interesMensual: number;
}
