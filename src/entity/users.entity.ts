// src/users/entities/user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Itinerary } from './itineraries.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Exclude() // Exclude password from serialization
  password: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.user)
  itineraries: Itinerary[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Additional common fields
  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  profileImage?: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
