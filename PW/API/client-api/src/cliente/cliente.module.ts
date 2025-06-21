import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { StatusModule } from 'src/status/status.module';
import { EnderecoModule } from 'src/endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), StatusModule, EnderecoModule],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
