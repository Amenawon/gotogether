import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PreHolidayAction } from 'src/entity/preholiday-action.entity';
import { Location } from 'src/entity/location.entity';
import { Repository } from 'typeorm';  

@Injectable()
export class PreHolidayService {
  constructor(
    @InjectRepository(PreHolidayAction)
    private actionsRepository: Repository<PreHolidayAction>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async getActionsForLocation(locationName: string) {
    const location = await this.locationRepository.findOne({
      where: { name: locationName },
    });

    if (!location) {
      throw new Error(`Location ${locationName} not found`);
    }

    return this.actionsRepository.find({
      where: { location: { id: location.id } },
      order: { priority: 'ASC' },
    });
  }
}
