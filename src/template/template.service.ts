// src/template/template.service.ts
import { Injectable } from '@nestjs/common'; 
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TemplateService {
  constructor( 
    private prisma: PrismaService,
  ) {}

  async findByName(name: string): Promise<string> {
    return '';
    // const template = await this.prisma.templateRepo.findOne({ where: { name } });
    // return template?.content || '';
  }
}
