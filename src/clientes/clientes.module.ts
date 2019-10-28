import { Module, forwardRef } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { CuentasModule } from '../cuenta/cuentas.module';

@Module({
  controllers: [ClientesController],
  imports: [
    forwardRef(() => CuentasModule),
  ],
  providers: [ClientesService],
  exports: [ClientesService],
})
export class ClientesModule {}
