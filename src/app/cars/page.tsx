"use client";

import Link from 'next/link'
import { Button, buttonVariants } from '../../components/ui/button'
import React, {useState, useEffect} from 'react'
import { getAllCars } from './cars.api'


export default function CarsPage() {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(3);
  const [carsData, setCarsData] = useState({ data: [], total: 0 });

  const loadCars = async (newOffset: number) => {
    const result = await getAllCars(newOffset, limit);
    console.log("Respuesta paginada:", result);
    setCarsData(result);
    setOffset(newOffset);
  };

  useEffect(() => {
    loadCars(0);
  }, []);

  const cars = carsData.data || [];
  
  return (
    <div className="px-4 bg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Listado de Autos</h1>
        <div className="flex gap-4">
          <Link href="/" className={buttonVariants({ className: "px-6 py-2 text-lg" })}>
            HOME
          </Link>
          <Link href="/cars/add" className={buttonVariants({ className: "px-6 py-2 text-lg" })}>
            Agregar Auto
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Modelo</th>
              <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Descripción</th>
              <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Año</th>
              <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Precio</th>
              <th className="px-6 py-3 border-b text-center text-gray-700 font-semibold">Stock</th>
              <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cars) && cars.length > 0 ? (
              cars.map((car: any) => (
                <tr key={car.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 border-b">{car.model}</td>
                  <td className="px-6 py-4 border-b">{car.description}</td>
                  <td className="px-6 py-4 border-b">{car.year}</td>
                  <td className="px-6 py-4 border-b">${car.price}</td>
                  <td className="px-6 py-4 border-b text-center">{car.stock}</td>
                  <td className="px-6 py-4 border-b align-middle whitespace-nowrap">
                  <Link href={`/cars/edit_car/${car.id}`}>
                      <Button variant="outline" size="sm" className="mr-2 min-h-[32px]">Editar</Button>
                        </Link>
                        <Link href={`/cars/delete?id=${car.id}`}>
                      <Button variant="destructive" size="sm" className="min-h-[32px]">Eliminar</Button>
                  </Link>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  No hay autos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          variant="outline"
          disabled={offset === 0}
          onClick={() => loadCars(offset - limit)}
        >
          Anterior
        </Button>
        <span className="text-sm text-gray-600">
          Página {Math.floor(offset / limit) + 1} de{" "}
          {Math.ceil(carsData.total / limit)}
        </span>
        <Button
          variant="outline"
          disabled={offset + limit >= carsData.total}
          onClick={() => loadCars(offset + limit)}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
