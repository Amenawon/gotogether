import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: "country" }) 
export class Country {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: "varchar", length: 100, nullable: true })
  name: string;
 
  
  @Column({ type: "char", length: 2, nullable: true })
  code: string; 
}
