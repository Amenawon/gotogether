import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Trip } from './trips.entity';

@Entity('flights')
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Trip, (trip) => trip.id)
  trip: Trip;

  @Column()
  airline: string;

  @Column()
  flightNumber: string;

  @Column()
  departureAirport: string;

  @Column()
  arrivalAirport: string;

  @Column({ type: 'timestamp' })
  departureTime: Date;

  @Column({ type: 'timestamp' })
  arrivalTime: Date;

  @Column({ nullable: true })
  bookingReference: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost: number;

  @Column({ nullable: true })
  currency: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
