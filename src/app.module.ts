import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasModule } from './cuenta/cuentas.module';
import { ConfigModule } from './config/config.module';
import { DatabseModule } from './database-config/databseConfig';

@Module({
    imports: [
        ConfigModule,
        DatabseModule,
        ClientesModule,
        CuentasModule,
    ],
})
export class AppModule { }
