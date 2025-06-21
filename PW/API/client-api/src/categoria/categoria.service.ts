import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly repository: Repository<Categoria>,
  ) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    const category = this.repository.create(createCategoriaDto);
    return this.repository.save(category);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const category = await this.repository.findOneBy({ id });
    if (!category) {
      throw new Error(`Categoria with id ${id} not found`);
    }
    this.repository.merge(category, updateCategoriaDto);
    return this.repository.save(category);
  }

  async remove(id: number) {
    const category = await this.repository.findOneBy({ id });
    if (category !== null) {
      await this.repository.remove(category);
    }
  }
}
