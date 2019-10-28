import { Module, forwardRef } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { CuentasModule } from '../cuenta/cuentas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './cliente.schema';

@Module({
  controllers: [ClientesController],
  imports: [
    MongooseModule.forFeature([
      { name: 'Cliente', schema: ClienteSchema },
    ]),
    forwardRef(() => CuentasModule),
  ],
  providers: [ClientesService],
  exports: [ClientesService],
})
export class ClientesModule {}
