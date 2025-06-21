import { Test, TestingModule } from '@nestjs/testing';
import { ItemPedidoController } from './item-pedido.controller';
import { ItemPedidoService } from './item-pedido.service';

describe('ItemPedidoController', () => {
  let controller: ItemPedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemPedidoController],
      providers: [ItemPedidoService],
    }).compile();

    controller = module.get<ItemPedidoController>(ItemPedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
