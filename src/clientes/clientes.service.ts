import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ClienteDto } from './cliente.dto';
import * as uuid from 'uuid';
import { CuentasService } from '../cuenta/cuentas.service';

@Injectable()
export class ClientesService {

    private clientes: ClienteDto[] = [];

    constructor(
        @Inject(forwardRef(() => CuentasService))
        private readonly cuentasService: CuentasService,
    ) {}

    getCliente(id: string) {
        return this.clientes.find(cliente => cliente.id === id);
    }

    getClientes() {
        return this.clientes;
    }

    saveCliente(cliente: ClienteDto) {
        const id = uuid.v4().toString();
        cliente.id = id;
        this.clientes.push(cliente);
        return this.getCliente(id);
    }

    updateCliente(id: string, clienteData: ClienteDto) {
        let cliente = this.getCliente(id);
        cliente = {
            id,
            ...cliente,
            ...clienteData,
        };
        this.clientes[ this.clientes.findIndex(c => c.id === id) ] = cliente;
        return cliente;
    }

    deleteCliente(id: string) {
        const cliente = this.getCliente(id);
        this.clientes = this.clientes.filter(c => c.id !== id);
        return cliente;
    }

    getCuentas(id: string) {
        return this.cuentasService.getCuentasByClienteId(id);
    }
}
