import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClienteDto } from './cliente.dto';

@Controller('clientes')
export class ClientesController {

    constructor(
        private readonly clientesService: ClientesService,
    ) {}

    @Get()
    getClientes() {
        return this.clientesService.getClientes();
    }

    @Get(':id')
    getCliente(@Param('id') id: string) {
        return this.clientesService.getCliente(id);
    }

    @Post()
    saveCliente(@Body() cliente: ClienteDto) {
        return this.clientesService.saveCliente(cliente);
    }

    @Put(':id')
    updateCliente(@Param('id') id: string, @Body() clienteData: ClienteDto) {
        return this.clientesService.updateCliente(id, clienteData);
    }

    @Delete(':id')
    deleteCliente(@Param('id') id: string) {
        return this.clientesService.deleteCliente(id);
    }

    @Get(':id/cuentas')
    getCuentasClientes(@Param('id') id: string) {
        const cuentas = this.clientesService.getCuentas(id);
        return cuentas;
    }
}
