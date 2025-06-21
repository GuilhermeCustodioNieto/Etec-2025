import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_status')
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
