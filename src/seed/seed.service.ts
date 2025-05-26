import { Injectable } from '@nestjs/common';
import { CarsService } from '../modules/cars/services/cars.service';
import { initialData } from './data/seed-data';
import { Car } from '../modules/cars/entities/car.entity';
import { Brand } from '../modules/brands/entities/brand.entity';
import { BrandsService } from '../modules/brands/services/brands.service';
@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) {}

  async runSeed() {
    await this.insertNewCars();
    return 'SEED EXECUTED CARS';
  }
  async runSeedBrands() {
    await this.insertNewBrands();
    return 'SEED BRANDS EXECUTED BRANDS';
  }

  private async insertNewCars() {
    await this.carsService.deleteAllCars();

    const cars = initialData.cars;
    const insertPromises: Promise<Car | undefined>[] = [];

    cars.forEach((car) => {
      insertPromises.push(this.carsService.create(car));
    });
    await Promise.all(insertPromises);
    return true;
  }
  private async insertNewBrands() {
    await this.BrandsService.deleteAllBrands();

    const brands = initialData.brands;
    const insertPromises: Promise<Brand | undefined>[] = [];

    brands.forEach((brand) => {
      insertPromises.push(this.BrandsService.create(brand));
    });
    await Promise.all(insertPromises);
    return true;
  }
}
