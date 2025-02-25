// src/template/template.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Template } from '../entity/template.entity';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private readonly templateRepo: Repository<Template>,
  ) {}

  async findByName(name: string): Promise<string> {
    const template = await this.templateRepo.findOne({ where: { name } });
    return template?.content || '';
  }
}