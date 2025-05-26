interface SeedBrand {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

interface SeedCar {
  model: string;
  year: number;
  description: string;
  stock: number;
  price: number;
  isAvailable: boolean;
  brand_id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

interface SeedData {
  brands: SeedBrand[];
  cars: SeedCar[];
}

export const initialData: SeedData = {
  brands: [
    {
      id: 1,
      name: 'Tesla',
      description: 'Innovative electric vehicles and clean energy solutions.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Ford',
      description: 'An iconic brand in the automobile industry.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Volkswagen',
      description: 'Renowned for quality and reliability.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'Rivian',
      description: 'Adventure-oriented electric vehicles.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  cars: [
    {
      model: 'Cybertruck Dual Motor AWD',
      year: 2024,
      stock: 0,
      price: 59990,
      isAvailable: false,
      brand_id: 1,
      description: 'Engineered for utility and built for adventure.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      model: 'Mustang Mach-E Premium',
      year: 2023,
      stock: 12,
      price: 48995,
      isAvailable: true,
      brand_id: 2,
      description:
        'The Ford Mustang Mach-E Premium is a fully electric SUV blending iconic.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      model: 'ID.4 Pro S',
      year: 2024,
      stock: 6,
      price: 43570,
      isAvailable: true,
      brand_id: 3,
      description: 'Volkswagen’s ID.4 Pro S is a sleek.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      model: 'Rivian R1T Adventure',
      year: 2024,
      stock: 2,
      price: 73900,
      isAvailable: true,
      brand_id: 4,
      description: 'Built for rugged terrain, the Rivian R1T Adventure.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
