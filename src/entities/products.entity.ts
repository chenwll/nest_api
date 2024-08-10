import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
// Products 表名
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' }) // Column：字段
  name: string;

  @Column({ type: 'varchar', name: 'sex' })
  sex: string;
}
