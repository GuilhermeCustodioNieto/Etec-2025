import { Produto } from './../../produtos/entities/produto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}
