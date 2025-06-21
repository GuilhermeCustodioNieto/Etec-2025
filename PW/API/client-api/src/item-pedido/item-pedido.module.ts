import { Module } from '@nestjs/common';
import { ItemPedidoService } from './item-pedido.service';
import { ItemPedidoController } from './item-pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedido } from './entities/item-pedido.entity';
import { PedidoModule } from 'src/pedido/pedido.module';
import { ProdutosModule } from 'src/produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemPedido]),
    PedidoModule,
    ProdutosModule,
  ],
  controllers: [ItemPedidoController],
  providers: [ItemPedidoService],
})
export class ItemPedidoModule {}
