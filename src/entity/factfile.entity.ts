import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Location } from './location.entity';

@Entity()
export class FactFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dates: string;

  @Column()
  currency: string;

  @Column({ nullable: true })
  weather: string;

  @Column()
  language: string;

  @Column({ nullable: true })
  timeDifference: string;

  @Column({ type: 'decimal', precision: 10, scale: 4, nullable: true })
  exchangeRate: number;

  @ManyToOne(() => Location, { eager: true })
  location: Location;
}
