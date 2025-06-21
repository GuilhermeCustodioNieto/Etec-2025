import { Cliente } from 'src/cliente/entities/cliente.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data_elaboracao: Date;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}
