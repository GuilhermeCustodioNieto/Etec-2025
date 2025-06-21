import { EnderecoService } from './../endereco/endereco.service';
import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { StatusService } from 'src/status/status.service';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private readonly repository: Repository<Cliente>,
    private readonly enderecoService: EnderecoService,
    private readonly statusService: StatusService,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const endereco = await this.enderecoService.findOne(
      createClienteDto.id_endereco,
    );

    const status = await this.statusService.findOne(createClienteDto.id_status);

    const cliente = this.repository.create({
      nome: createClienteDto.nome,
      telefone: createClienteDto.telefone,
      limite: createClienteDto.limite,
      endereco,
      status,
    });

    return this.repository.save(cliente);
  }

  findAll() {
    return this.repository.find({
      relations: {
        endereco: true,
        status: true,
      },
    });
  }

  async findOne(id: number) {
    const cliente = await this.repository.findOne({
      where: { id },
      relations: {
        endereco: true,
        status: true,
      },
    });

    if (!cliente) {
      throw new Error(`Cliente with id ${id} not found`);
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.findOne(id);
    if (!cliente) {
      throw new Error(`Cliente with id ${id} not found`);
    }

    this.repository.merge(cliente, updateClienteDto);
    return this.repository.save(cliente);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    if (!cliente) {
      throw new Error(`Cliente with id ${id} not found`);
    }

    void this.repository.remove(cliente);
  }
}
