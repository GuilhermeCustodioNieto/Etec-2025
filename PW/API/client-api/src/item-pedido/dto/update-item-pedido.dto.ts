import { PartialType } from '@nestjs/mapped-types';
import { CreateItemPedidoDto } from './create-item-pedido.dto';

export class UpdateItemPedidoDto extends PartialType(CreateItemPedidoDto) {}
