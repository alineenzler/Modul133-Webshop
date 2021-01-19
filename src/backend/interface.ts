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
        "description": "Eine etwas schwerere Taschenlampe, welche genug Licht verfügt um dunkle Stellen zu beleuchten.",
        "normalPrice": 27.80,
        "specialOfferPrice": 25.00,
        "image": "Taschenlampe.jpg"
    },
    {    
        "id": v4.generate(),
        "productName": "Starke Taschenlampe",
        "description": "Diese Taschenlampe ist leicht zu tragen und spendet viel Licht. ",
        "normalPrice": 56,
        "specialOfferPrice": 50.10,
        "image": "StarkeTaschenlampe.jpg"
    },
    {    
        "id": v4.generate(),
        "productName": "UV Taschenlampe",
        "description": "Diese HighTech UV Taschenlampe ist perfekt geeignet um Fingerabdrücke zu entdecken. ",
        "normalPrice": 50.40,
        "specialOfferPrice": 45.50,
        "image": "UV-Taschenlampe.jpg"
    },
    {    
        "id": v4.generate(),
        "productName": "Kerze",
        "description": "Eine einfache Kerze. Die Kerzen kommen immer im 4er-Pack.",
        "normalPrice": 10,
        "specialOfferPrice": 8.35,
        "image": "Kerze.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Räucherstab",
        "description": "Der Räucherstab ist dazu da, einen Raum einräuchern zu können. Direktes Einatmen von zu viel Rauch, kann zu schwindel und übelkeit führen.",
        "normalPrice": 7,
        "specialOfferPrice": 6,
        "image": "Raeucherstab.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Feuerzeug",
        "description": "Ein praktisches kleines Feuerzeug.",
        "normalPrice": 1,
        "specialOfferPrice": 0.85,
        "image": "Feuerzeug.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Fotokamera",
        "description": "Die Fotokamera besitzt einen Blitz und kann bis zu 5 Fotos speichern ohne speicherchip.",
        "normalPrice": 240,
        "specialOfferPrice": 230,
        "image": "Fotokamera.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Videokamera",
        "description": "Eine Videokamera mit Nachtsicht! Passt perfekt auf das im Shop erhältliche Stativ.",
        "normalPrice": 240,
        "specialOfferPrice": 230,
        "image": "Videokamera.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Stativ",
        "description": "Dieses Stativ wird mit der Videokamera empfohlen. Sie ermöglicht eine einstellbare Höhe der Kamera.",
        "normalPrice": 70,
        "specialOfferPrice": 65.90,
        "image": "Stativ.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Thermometer",
        "description": "Dieses Thermoter ist gut geeignet, um Temperaturen in Räumen zu messen. Einfach anschalten und durch den Raum laufen!",
        "normalPrice": 40.90,
        "specialOfferPrice": 35.40,
        "image": "Thermometer.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "EMF Messgerät",
        "description": "Mit diesem Messgerät, kann man Elektromotorische Kraft (Electromotive Force) erkennen. Die einzige kann zwischen 1 und 5 wechseln.",
        "normalPrice": 34.50,
        "specialOfferPrice": 33.50,
        "image": "EMF-Messgeraet.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Geisterbox",
        "description": "Mithilfe dieser Geisterbox, kann man mit manchen Geistern kommunizieren. Kein Garantie.",
        "normalPrice": 42.30,
        "specialOfferPrice": 40.65,
        "image": "Geisterbox.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Parabol Mikrofon",
        "description": "Mit dem Parabol Mikrofon ist es möglich Geräusche zu erkennen.",
        "normalPrice": 30.25,
        "specialOfferPrice": 27.75,
        "image": "ParabolMikrofon.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Bewegungsmelder",
        "description": "Mithilfe dieses Bewegungsmelder, werden Bewegungen in einem Raum erfasst. Die Ausrüstung enthällt einen Melder, welcher piept bei Aktivierung des Bewegungmelders.",
        "normalPrice": 90,
        "specialOfferPrice": 85.30,
        "image": "Bewegungsmelder.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Salz",
        "description": "Eine einfache Dose Salz.",
        "normalPrice": 2.30,
        "specialOfferPrice": 2.10,
        "image": "Salz.jpg",
    },
    {    
        "id": v4.generate(),
        "productName": "Leeres Buch",
        "description": "Dieses Buch ist praktisch, um mit manchen Geistern zu kommunizieren. Ein Stift muss seperat gekauft werden und ist nicht im Shop erhältlich. Keine Garantie.",
        "normalPrice": 15,
        "specialOfferPrice": 13.70,
        "image": "Buch.jpg",
    }
];

export function getAllProducts(): Product[] {
    return products;
}

export function getProductById(productId: string): Product | undefined {
    return products.find(product => product.id === productId);
}