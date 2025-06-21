import { ClienteService } from './../cliente/cliente.service';
import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido) private readonly repository: Repository<Pedido>,
    private readonly clienteService: ClienteService,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const pedido = this.repository.create({
      data_elaboracao: createPedidoDto.data_elaboracao,
      cliente: await this.clienteService.findOne(createPedidoDto.cliente_id),
    });
    return this.repository.save(pedido);
  }

  findAll() {
    return this.repository.find({
      relations: {
        cliente: true,
      },
    });
  }

  async findOne(id: number) {
    const pedido = await this.repository.findOne({
      where: { id },
      relations: { cliente: true },
    });
    if (!pedido) {
      throw new Error(`Pedido with id ${id} not found`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const pedido = await this.findOne(id);
    if (!pedido) {
      throw new Error(`Pedido with id ${id} not found`);
    }
    this.repository.merge(pedido, updatePedidoDto);
    return this.repository.save(pedido);
  }

  async remove(id: number) {
    const pedido = await this.findOne(id);
    if (!pedido) {
      throw new Error(`Pedido with id ${id} not found`);
    }
    void this.repository.remove(pedido);
  }
}
