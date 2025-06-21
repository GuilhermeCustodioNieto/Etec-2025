import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { CategoriaService } from 'src/categoria/categoria.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repositoryProdutos: Repository<Produto>,
    private readonly categoriaService: CategoriaService,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    const categoria = await this.categoriaService.findOne(
      createProdutoDto.id_categoria,
    );

    if (categoria == null) {
      throw new Error(
        `Categoria with id ${createProdutoDto.id_categoria} not found`,
      );
    }

    const produto = this.repositoryProdutos.create(createProdutoDto);

    return this.repositoryProdutos.save(produto);
  }

  findAll() {
    return this.repositoryProdutos.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findOne(id: number) {
    const produto = await this.repositoryProdutos.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });

    if (!produto) {
      throw new Error(`Produto with id ${id} not found`);
    }

    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produto = await this.repositoryProdutos.findOneBy({ id });

    if (!produto) {
      throw new Error(`Produto with id ${id} not found`);
    }

    this.repositoryProdutos.merge(produto, updateProdutoDto);

    return this.repositoryProdutos.save(produto);
  }

  async remove(id: number) {
    const produto = await this.repositoryProdutos.findOneBy({ id });
    if (!produto) {
      throw new Error(`Produto with id ${id} not found`);
    }
    await this.repositoryProdutos.remove(produto);
  }
}
