import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentaDto } from './cuenta.dto';

@Controller('cuentas')
export class CuentasController {

    constructor(
        private readonly cuentasService: CuentasService,
    ) {}

    @Get()
    getCuentas() {
        return this.cuentasService.getCuentas();
    }

    @Get(':id')
    getCuenta(@Param('id') id: string) {
        return this.cuentasService.getCuenta(id);
    }

    @Post()
    saveCuenta(@Body() cuenta: CuentaDto) {
        return this.cuentasService.saveCuenta(cuenta);
    }

    @Put(':id')
    updateCuenta(@Param('id') id: string, @Body() cuentaData: CuentaDto) {
        return this.cuentasService.updateCuenta(id, cuentaData);
    }

    @Delete(':id')
    deleteCuenta(@Param('id') id: string) {
        return this.cuentasService.deleteCuenta(id);
    }

    @Get(':id/cliente')
    getCliente(@Param('id') id: string) {
        return this.cuentasService.getCliente(id);
    }
}
