import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CuentaDto } from './cuenta.dto';
import uuid = require('uuid');
import { ClientesService } from '../clientes/clientes.service';
import { InjectModel } from '@nestjs/mongoose';
import { Cuenta } from './cuenta.interface';
import { Model } from 'mongoose';

@Injectable()
export class CuentasService {

    private cuentas: CuentaDto[] = [];

    constructor(
        @Inject(forwardRef(() => ClientesService))
        private readonly clienteService: ClientesService,
        @InjectModel('Cuenta') private readonly cuentaModel: Model<Cuenta>,
    ) {}

    async getCuentas() {
        return await this.cuentaModel.find();
    }

    async getCuenta(id: string) {
        return await this.cuentaModel.findById(id);
    }

    async saveCuenta(cuentaData: CuentaDto) {
        const cuenta = new this.cuentaModel(cuentaData);
        await cuenta.save();
        return cuenta;
    }

    async updateCuenta(id: string, cuentaData: CuentaDto) {
        await this.cuentaModel.findByIdAndUpdate(id, cuentaData);
        return await this.cuentaModel.findById(id);
    }

    async deleteCuenta(id: string) {
        return this.cuentaModel.findByIdAndDelete(id);
    }

    async getCliente(id: string) {
        return await this.clienteService.getCliente( (await this.getCuenta(id)).idCliente );
    }

    async getCuentasByClienteId(idCliente: string) {
        return await this.cuentaModel.find({
            idCliente,
        }).exec();
    }
}
