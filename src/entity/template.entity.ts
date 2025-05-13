// src/template/entities/template.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // e.g., "itinerary_title", "itinerary_description"

  @Column()
  content: string; // e.g., "{tripType} Trip to {city}"
}
