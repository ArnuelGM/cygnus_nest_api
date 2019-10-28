import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasModule } from './cuenta/cuentas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_api', { useNewUrlParser: true, useUnifiedTopology: true }),
    ClientesModule, CuentasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
