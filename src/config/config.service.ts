import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

export type EnvConfig = Record<string, string>;

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;
    private filePath: string = '.env';

    constructor() {
        const config = dotenv.parse(fs.readFileSync(this.filePath));
        this.envConfig = this.validateInput(config);
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            MONGODB_URI: Joi.string().required(),
        });

        const { error, value: validatedEnvConfig } = envVarsSchema.validate(
            envConfig,
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
}
