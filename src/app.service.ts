import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // console.log(this.tasks);
    // const apiKey = this.config.get<string>('API_HEY');
    // const nameDB = this.config.get('DATABASE_NAME');
    const apiKey = this.configService.apikey;
    const nameDB = this.configService.database.name;
    const portDB = this.configService.database.port;
    return `Hello World ${apiKey} - ${nameDB} ${portDB ? portDB : 3000}`;
  }
}
