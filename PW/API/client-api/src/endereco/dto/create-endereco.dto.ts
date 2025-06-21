import { IsInt, IsString } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  logradouro: string;

  @IsString()
  cep: string;

  @IsInt()
  numero: number;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;
}
