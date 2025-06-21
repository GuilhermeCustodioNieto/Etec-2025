import { Injectable } from '@nestjs/common';
import { CreateItemPedidoDto } from './dto/create-item-pedido.dto';
import { UpdateItemPedidoDto } from './dto/update-item-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPedido } from './entities/item-pedido.entity';
import { Repository } from 'typeorm';
import { ProdutosService } from 'src/produtos/produtos.service';
import { PedidoService } from 'src/pedido/pedido.service';

@Injectable()
export class ItemPedidoService {
  constructor(
    @InjectRepository(ItemPedido)
    private readonly repository: Repository<ItemPedido>,
    private readonly pedidoService: PedidoService,
    private readonly produtosService: ProdutosService,
  ) {}

  async create(createItemPedidoDto: CreateItemPedidoDto) {
    const pedido = await this.pedidoService.findOne(
      createItemPedidoDto.id_pedido,
    );
    const produto = await this.produtosService.findOne(
      createItemPedidoDto.id_produto,
    );
    const itemPedido = this.repository.create({
      qnt: createItemPedidoDto.qnt,
      produto,
      pedido,
    });
    return this.repository.save(itemPedido);
  }

  findAll() {
    return this.repository.find({
      relations: {
        produto: true,
        pedido: true,
      },
    });
  }

  async findOne(id: number) {
    const itemPedido = await this.repository.findOne({
      where: { id },
      relations: {
        produto: true,
        pedido: true,
      },
    });
    if (!itemPedido) {
      throw new Error(`ItemPedido with id ${id} not found`);
    }
    return itemPedido;
  }

  async update(id: number, updateItemPedidoDto: UpdateItemPedidoDto) {
    const itemPedido = await this.findOne(id);
    if (!itemPedido) {
      throw new Error(`ItemPedido with id ${id} not found`);
    }
    this.repository.merge(itemPedido, updateItemPedidoDto);
    return this.repository.save(itemPedido);
  }

  async remove(id: number) {
    const itemPedido = await this.findOne(id);
    if (!itemPedido) {
      throw new Error(`ItemPedido with id ${id} not found`);
    }

    void this.repository.remove(itemPedido);
  }
}
