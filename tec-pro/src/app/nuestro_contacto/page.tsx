"use client"
import ContactoCards from "@/components/contacto/page";

import { IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandWhatsapp,
    IconMail
   } from '@tabler/icons-react';

export const Contacto = () => {
    return (
        <main className="bg-white text-black p-12 ">
            
            <h1 className="text-3xl font-bold pb-8">Nuestro contacto</h1>

            <ContactoCards/>
            
            <div className="flex items-center justify-center w-full gap-4">
                <IconBrandTiktok/>TecPro
                <IconBrandFacebook/>TecPro
                <IconBrandInstagram/>TecPro
            </div>
        </main>
    )
 
 }