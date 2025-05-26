import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from '../modules/cars/cars.module';
import { BrandsModule } from '../modules/brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
