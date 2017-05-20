import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

@Entity()
export class Stat {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
