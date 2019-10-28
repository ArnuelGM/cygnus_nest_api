import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CuentaDto } from './cuenta.dto';
import uuid = require('uuid');
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class CuentasService {

    private cuentas: CuentaDto[] = [];

    @Inject(forwardRef(() => ClientesService))
    private readonly clienteService: ClientesService;

    getCuentas() {
        return this.cuentas;
    }

    getCuenta(id: string) {
        return this.cuentas.find(c => c.id === id);
    }

    saveCuenta(cuenta: CuentaDto) {
        cuenta.id = uuid.v4().toString();
        this.cuentas.push(cuenta);
        return cuenta;
    }

    updateCuenta(id: string, cuentaData: CuentaDto) {
        let cuenta = this.getCuenta(id);
        cuenta = {
            id,
            ...cuenta,
            ...cuentaData,
        };
        this.cuentas[ this.cuentas.findIndex(c => c.id === id) ] = cuenta;
        return cuenta;
    }

    deleteCuenta(id: string) {
        const cuenta = this.getCuenta(id);
        this.cuentas = this.cuentas.filter(c => c.id !== id);
        return cuenta;
    }

    getCliente(id: string) {
        const cuenta = this.getCuenta(id);
        return this.clienteService.getCliente(cuenta.idCliente);
    }

    getCuentasByClienteId(idCliente: string) {
        return this.cuentas.filter(c => c.idCliente === idCliente);
    }
}
