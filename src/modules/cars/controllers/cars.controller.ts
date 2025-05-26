import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarsService } from '../services/cars.service';
import { CreateCarDto, UpdateCarDto } from '../dto/car.dto';
import { PaginationDto } from '../../../common/dtos/pagination.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getFindAll(@Query() paginationDto: PaginationDto) {
    return this.carsService.findAll(paginationDto);
  }

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    const nuevo = await this.carsService.create(createCarDto);
    const data = {
      data: nuevo,
      message: 'Registro creado correctamente',
    };
    return data;
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const rows = await this.carsService.findOne(id);
    const data = {
      data: rows,
    };
    return data;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    const datos = await this.carsService.update(id, updateCarDto);
    const data = {
      data: datos,
      message: 'Registro actualizado correctamente',
    };
    return data;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const dato = await this.carsService.remove(id);
    const data = {
      data: dato,
      message: 'Registro eliminado correctamente',
    };
    return data;
  }
}
