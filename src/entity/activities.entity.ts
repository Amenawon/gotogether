import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Trip } from './trips.entity';
import { Destination } from './destinations.entity';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Trip, (trip) => trip.id)
  trip: Trip;

  @ManyToOne(() => Destination, { nullable: true })
  destination: Destination;

  @Column()
  activityName: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'datetime' })
  startTime: Date;

  @Column({ type: 'datetime' })
  endTime: Date;

  @Column({ type: 'enum', enum: ['Sightseeing', 'Food', 'Adventure', 'Relaxation', 'Shopping', 'Cultural'] })
  category: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost: number;

  @Column({ nullable: true })
  currency: string;

  @Column({ nullable: true })
  bookingReference: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
