import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  priceHt: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  dateUpdate: Date;
}
