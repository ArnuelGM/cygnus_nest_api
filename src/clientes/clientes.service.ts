import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ClienteDto } from './cliente.dto';
import * as uuid from 'uuid';
import { CuentasService } from '../cuenta/cuentas.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from './cliente.interface';

@Injectable()
export class ClientesService {

    private clientes: ClienteDto[] = [];

    constructor(
        @Inject(forwardRef(() => CuentasService))
        private readonly cuentasService: CuentasService,
        @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
    ) {}

    /**
     * Obiene un registro de tipo cliente
     * @param id : string
     */
    async getCliente(id: string) {
        return await this.clienteModel.findById(id);
    }

    /**
     * Obiene un listado de clienes
     */
    async getClientes() {
        return await this.clienteModel.find();
    }

    /**
     * Crea un nuevo regisro de cliente
     * @param clienteData : ClienteDto
     */
    async saveCliente(clienteData: ClienteDto) {
        const cliente = new this.clienteModel(clienteData);
        await cliente.save();
        return cliente;
    }

    async updateCliente(id: string, clienteData: ClienteDto) {
        await this.clienteModel.findByIdAndUpdate(id, clienteData);
        return await this.getCliente(id);
    }

    async deleteCliente(id: string) {
        return await this.clienteModel.findByIdAndDelete(id);
    }

    async getCuentas(id: string) {
        return await this.cuentasService.getCuentasByClienteId(id);
    }
}
