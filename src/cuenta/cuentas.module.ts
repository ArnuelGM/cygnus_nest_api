import { Module, forwardRef } from '@nestjs/common';
import { CuentasController } from './cuentas.controller';
import { CuentasService } from './cuentas.service';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  controllers: [CuentasController],
  imports: [forwardRef(() => ClientesModule)],
  providers: [CuentasService],
  exports: [CuentasService],
})
export class CuentasModule {}
