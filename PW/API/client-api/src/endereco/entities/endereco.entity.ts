import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_endereco')
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logradouro: string;

  @Column()
  cep: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;
}
