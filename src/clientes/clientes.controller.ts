import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClienteDto } from './cliente.dto';

@Controller('clientes')
export class ClientesController {

    constructor(
        private readonly clientesService: ClientesService,
    ) {}

    @Get()
    async getClientes() {
        return await this.clientesService.getClientes();
    }

    @Get(':id')
    async getCliente(@Param('id') id: string) {
        return await this.clientesService.getCliente(id);
    }

    /**
     * Crear un nuevo cliente
     * @param cliente : Datos del cliente
     */
    @Post()
    async saveCliente(@Body() cliente: ClienteDto) {
        return await this.clientesService.saveCliente(cliente);
    }

    @Put(':id')
    async updateCliente(@Param('id') id: string, @Body() clienteData: ClienteDto) {
        return await this.clientesService.updateCliente(id, clienteData);
    }

    @Delete(':id')
    async deleteCliente(@Param('id') id: string) {
        return await this.clientesService.deleteCliente(id);
    }

    @Get(':id/cuentas')
    async getCuentasClientes(@Param('id') id: string) {
        const cuentas = this.clientesService.getCuentas(id);
        return cuentas;
    }
}
