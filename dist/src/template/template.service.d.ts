import { PrismaService } from 'src/prisma.service';
export declare class TemplateService {
    private prisma;
    constructor(prisma: PrismaService);
    findByName(name: string): Promise<string>;
}
