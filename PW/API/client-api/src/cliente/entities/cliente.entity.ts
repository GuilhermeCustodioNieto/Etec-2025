import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Status } from 'src/status/entities/status.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  telefone: string;

  @Column()
  nome: string;

  @Column()
  limite: number;

  @ManyToOne(() => Endereco)
  @JoinColumn({ name: 'id_endereco' })
  endereco: Endereco;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'id_status' })
  status: Status;
}
