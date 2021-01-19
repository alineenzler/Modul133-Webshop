import { Context } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export interface Product {
    id: string,
    productName: string,
    description: string,
    normalPrice: number,
    specialOfferPrice: number,
    image: string
};

export const products: Product[] = [
    {    
        "id": v4.generate(),
        "productName": "Taschenlampe",
        "description": "Text",
        "normalPrice": 27.80,
        "specialOfferPrice": 25.00,
        "image": "Taschenlampe.jpg"
    },
    {    
        "id": v4.generate(),
        "productName": "Starke Taschenlampe",
        "description": "Text",
        "normalPrice": 56,
        "specialOfferPrice": 50.10,
        "image": "StarkeTaschenlampe.jpg"
    },
    {    
        "id": v4.generate(),
        "productName": "UV Taschenlampe",
        "description": "Text",
        "normalPrice": 50.40,
        "specialOfferPrice": 45.50,
        "image": "UV-Taschenlampe.jpg"
    },
    {    
        "id": v4.generate(),
        "productName": "Kerze",
        "description": "Text",
        "normalPrice": 10,
        "specialOfferPrice": 8.35,
        "image": "Kerze.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Räucherstab",
        "description": "Text",
        "normalPrice": 7,
        "specialOfferPrice": 6,
        "image": "Raeucherstab.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Feuerzeug",
        "description": "Text",
        "normalPrice": 1,
        "specialOfferPrice": 0.85,
        "image": "Feuerzeug.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Fotokamera",
        "description": "Text",
        "normalPrice": 240,
        "specialOfferPrice": 230,
        "image": "Fotokamera.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Videokamera",
        "description": "Text",
        "normalPrice": 240,
        "specialOfferPrice": 230,
        "image": "Videokamera.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Stativ",
        "description": "Text",
        "normalPrice": 70,
        "specialOfferPrice": 65.90,
        "image": "Stativ.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Thermometer",
        "description": "Text",
        "normalPrice": 40.90,
        "specialOfferPrice": 35.40,
        "image": "Thermometer.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "EMF Messgerät",
        "description": "Text",
        "normalPrice": 34.50,
        "specialOfferPrice": 33.50,
        "image": "EMF-Messgeraet.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Geisterbox",
        "description": "Text",
        "normalPrice": 42.30,
        "specialOfferPrice": 40.65,
        "image": "Geisterbox.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Parabol Mikrofon",
        "description": "Text",
        "normalPrice": 30.25,
        "specialOfferPrice": 27.75,
        "image": "ParabolMikrofon.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Bewegungsmelder",
        "description": "Text",
        "normalPrice": 90,
        "specialOfferPrice": 85.30,
        "image": "Bewegungsmelder.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Salz",
        "description": "Text",
        "normalPrice": 2.30,
        "specialOfferPrice": 2.10,
        "image": "Salz.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Leeres Buch",
        "description": "Text",
        "normalPrice": 15,
        "specialOfferPrice": 13.70,
        "image": "Buch.jpg",
    }
];