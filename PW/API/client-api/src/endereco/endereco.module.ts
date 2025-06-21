import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from './entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco])],
  controllers: [EnderecoController],
  providers: [EnderecoService],
  exports: [EnderecoService],
})
export class EnderecoModule {}
