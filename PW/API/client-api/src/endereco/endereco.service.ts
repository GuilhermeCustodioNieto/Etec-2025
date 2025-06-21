import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly repository: Repository<Endereco>,
  ) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    const endereco = this.repository.create(createEnderecoDto);
    return this.repository.save(endereco);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const endereco = await this.repository.findOne({
      where: { id },
    });

    if (!endereco) {
      throw new Error(`Endereco with id ${id} not found`);
    }
    return endereco;
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    const endereco = await this.findOne(id);

    return this.repository.merge(endereco, updateEnderecoDto);
  }

  async remove(id: number) {
    const endereco = await this.findOne(id);
    void this.repository.remove(endereco);
  }
}
