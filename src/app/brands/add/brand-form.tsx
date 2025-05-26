"use client";

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input} from '@/components/ui/input'
import { useForm } from "react-hook-form";
import { addBrands } from '../brands.api';
import { BrandData } from '../../../interface/brand.interface'; 
import { useRouter } from 'next/navigation';

export function BrandForm() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<BrandData>({
      mode: "onChange"
    });
    const router = useRouter();

    const onSubmit = handleSubmit(async(data) => {
        console.log(data);
        await addBrands(data);
        router.push("/");
    });
    
    return (
        <form onSubmit={onSubmit}>

            <Label>Marca</Label>
            <Input {...register("name",  {required:true})} />
            {errors.name && <p className="text-red-600 text-sm">Este campo es obligatorio</p>}

            <Label>Descripcion</Label>
            <Input {...register("description")} />
            {errors.description && <p className="text-red-600 text-sm">Este campo es obligatorio</p>}
        
            <div className="mt-6 flex justify-end space-x-3">
                <Button 
                type="submit"
                disabled={!isValid}
                className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Agregar Marca</Button>
                <Button 
                type="button"
                onClick={() => router.push("/")}
                className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Cancelar</Button>
            </div>
        </form>
    );
}
