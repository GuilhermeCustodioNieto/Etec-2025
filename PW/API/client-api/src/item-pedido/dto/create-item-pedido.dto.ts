import { IsInt } from 'class-validator';

export class CreateItemPedidoDto {
  @IsInt()
  qnt: number;

  @IsInt()
  id_produto: number;

  @IsInt()
  id_pedido: number;
}
