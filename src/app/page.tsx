"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAllBrands } from "./brands/brands.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Brand } from "../interface/brand.interface";

interface BrandsResponse {
  data: Brand[];
  total: number;
}

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(3);
  const [brandsData, setBrandsData] = useState<BrandsResponse>({
    data: [],
    total: 0,
  });

  const loadBrands = async (newOffset: number) => {
    const result = await getAllBrands(newOffset, limit);
    setBrandsData(result);
    setOffset(newOffset);
  };

  useEffect(() => {
    loadBrands(0);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-8 px-4">
        <h1 className="text-4xl font-bold">Concesionario de Carros</h1>
        <div className="flex gap-4">
          <Link href="/brands/add" className={buttonVariants()}>
            Agregar Marca
          </Link>
          <Link href="/cars" className={buttonVariants()}>
            Automoviles
          </Link>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {brandsData.data.map((brand) => (
            <TableRow key={brand.id}>
              <TableCell>{brand.id}</TableCell>
              <TableCell>{brand.name}</TableCell>
              <TableCell>{brand.description || "Sin descripción"}</TableCell>

              <TableCell className="text-right">
                <div className ="flex items-center justify-end space-x-2">
                  <Link
                    href={`/brands/edit_brands/${brand.id}`}
                    className={buttonVariants({ variant: "outline" })}>
                    Editar
                  </Link>
                  <Link
                    href={`/brands/delete_brands/${brand.id}`}
                    className={buttonVariants({ variant: "destructive" })}>
                    Eliminar
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          variant="outline"
          disabled={offset === 0}
          onClick={() => loadBrands(offset - limit)}>
          Anterior
        </Button>
        
        <span className="text-sm text-gray-600">
          Página {Math.floor(offset / limit) + 1} de{" "}
          {Math.ceil(brandsData.total / limit)}
        </span>
        <Button
          variant="outline"
          disabled={offset + limit >= brandsData.total}
          onClick={() => loadBrands(offset + limit)}>
          Siguiente
        </Button>
      </div>
    </>
  );
}