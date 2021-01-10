import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}
  async findAll() {
    return this.cityRepository.find();
  }

  async findOne(id: number) {
    return this.cityRepository.findOne(id);
  }

  async create(createCityDto: CreateCityDto): Promise<City> {
    return this.cityRepository.save(createCityDto);
  }

  async update(id: string, updateCityDto: UpdateCityDto): Promise<City> {
    await this.cityRepository.update(id, updateCityDto);
    return this.cityRepository.findOne(id);
  }

  async remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
