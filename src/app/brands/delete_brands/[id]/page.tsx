"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { deleteBrand } from '../../brands.api';

export default function DeleteBrandPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const brandId = params.id;

  const handleDelete = async () => {
    if (!brandId) return;
    await deleteBrand(brandId);
    router.push('/');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Eliminar Marca</CardTitle>
        </CardHeader>
        <CardContent>
          <p>¿Estás seguro de que deseas eliminar esta marca?</p>
          <div className="flex gap-4 mt-4 justify-end">
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              SI
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
