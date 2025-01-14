import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Location } from './location.entity';

@Entity()
export class PreHolidayAction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: 1 })
  priority: number;

  @ManyToOne(() => Location, (location) => location.actions, { eager: true })
  location: Location;
}
