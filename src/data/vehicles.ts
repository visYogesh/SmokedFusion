// src/data/vehicles.ts
export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage?: string;
  images: string[];
  features: string[];
}

// --- only for “for sale” if you need the external page link,
//    otherwise drop `page` or keep it optional
export interface SaleVehicle extends Vehicle {
  page?: string;
}

export const vehiclesForSale: SaleVehicle[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2012,
    price: "$10,111",
    mileage: "145,000 miles",
    images: [
      "/images/sales/ty2.jpg",
      "/images/sales/ty1.jpg",
      /* … */
    ],
    features: ["6-Speed", "Gasoline", "2.5L I4", "Shiftable Automatic"],
    page: "https://…",
  },
  {
    id: 2,
    make: "Chevrolet",
    model: "c/k 10 Series",
    year: 1985,
    price: "$15,500",
    mileage: "40,000 miles",
    images: ["/images/sales/ch1.jpg", /* … */],
    features: ["Automatic", "Power Steering", "Classic", "Restored"],
    page: "https://…",
  },
  // … more sale vehicles …
];

export const vehiclesForRent: Vehicle[] = [
  {
    id: 101,        // give a unique id space if you like
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$85/day",
    images: ["/images/car1.jpg", /* … */],
    features: ["Luxury", "GPS", "Bluetooth", "Premium Sound"],
  },
  // … more rental vehicles …
];
