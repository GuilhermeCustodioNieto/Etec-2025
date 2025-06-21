import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemPedidoService } from './item-pedido.service';
import { CreateItemPedidoDto } from './dto/create-item-pedido.dto';
import { UpdateItemPedidoDto } from './dto/update-item-pedido.dto';

@Controller('itempedidos')
export class ItemPedidoController {
  constructor(private readonly itemPedidoService: ItemPedidoService) {}

  @Post()
  create(@Body() createItemPedidoDto: CreateItemPedidoDto) {
    return this.itemPedidoService.create(createItemPedidoDto);
  }

  @Get()
  findAll() {
    return this.itemPedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemPedidoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemPedidoDto: UpdateItemPedidoDto,
  ) {
    return this.itemPedidoService.update(+id, updateItemPedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemPedidoService.remove(+id);
  }
}
