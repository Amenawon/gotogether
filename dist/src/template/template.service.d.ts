import { Repository } from 'typeorm';
import { Template } from '../entity/template.entity';
export declare class TemplateService {
    private readonly templateRepo;
    constructor(templateRepo: Repository<Template>);
    findByName(name: string): Promise<string>;
}
