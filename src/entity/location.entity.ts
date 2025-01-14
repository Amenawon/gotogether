import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PreHolidayAction } from './preholiday-action.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  region: string;

  @OneToMany(() => PreHolidayAction, (action) => action.location)
  actions: PreHolidayAction[];
}
