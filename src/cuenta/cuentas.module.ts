import { Module, forwardRef } from '@nestjs/common';
import { CuentasController } from './cuentas.controller';
import { CuentasService } from './cuentas.service';
import { ClientesModule } from '../clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CuentaSchema } from './cuenta.schema';

@Module({
    controllers: [CuentasController],
    imports: [
        forwardRef(() => ClientesModule),
        MongooseModule.forFeature([{ name: 'Cuenta', schema: CuentaSchema }]),
    ],
    providers: [CuentasService],
    exports: [CuentasService],
})
export class CuentasModule {}
