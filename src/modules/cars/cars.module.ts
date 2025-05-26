import { Module } from '@nestjs/common';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './services/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Brand } from '../brands/entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Brand])],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [TypeOrmModule, CarsService],
})
export class CarsModule {}
