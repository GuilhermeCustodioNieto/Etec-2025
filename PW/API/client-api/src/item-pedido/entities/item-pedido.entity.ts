import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_itempedido')
export class ItemPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qnt: number;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;
}
