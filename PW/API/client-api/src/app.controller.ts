import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/firma/1.0.1/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
