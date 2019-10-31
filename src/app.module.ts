import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientesModule } from "./clientes/clientes.module";
import { CuentasModule } from "./cuenta/cuentas.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "./config/config.module";
import { ConfigService } from "./config/config.service";
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        ConfigModule,
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                console.log('app.module config:', configService);
                return {
                    uri: 'mongodb://localhost:27017/nest',
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            },
        }),
        ClientesModule,
        CuentasModule,
        DatabaseModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
