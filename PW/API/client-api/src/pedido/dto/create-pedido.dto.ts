import { IsNumber, Matches } from 'class-validator';

export class CreatePedidoDto {
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'data_elaboracao deve estar no formato yyyy-MM-dd',
  })
  data_elaboracao: Date;

  @IsNumber()
  cliente_id: number;
}
