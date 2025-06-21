import { IsNumber, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  telefone: string;

  @IsString()
  nome: string;

  @IsNumber()
  limite: number;

  @IsNumber()
  id_endereco: number;

  @IsNumber()
  id_status: number;
}
