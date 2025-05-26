import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage?: string;
  images: string[];
  features: string[];
}

const vehiclesForSale: Vehicle[] = [
  {
    id: 1,
    make: "BMW",
    model: "X5",
    year: 2020,
    price: "$42,500",
    mileage: "35,000 miles",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],
    features: ["Leather Interior", "Navigation", "AWD", "Premium Sound"],
  },

  {
    id: 2,
    make: "Mercedes",
    model: "C-Class",
    year: 2019,
    price: "$38,900",
    mileage: "28,000 miles",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],

    features: ["Sunroof", "Heated Seats", "Bluetooth", "Premium Wheels"],
  },
  {
    id: 3,
    make: "Audi",
    model: "A4",
    year: 2021,
    price: "$39,800",
    mileage: "22,000 miles",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],

    features: ["Quattro AWD", "Virtual Cockpit", "LED Lights", "Sport Package"],
  },
];

const vehiclesForRent: Vehicle[] = [
  {
    id: 1,
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$85/day",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],
    features: ["Luxury Interior", "GPS", "Bluetooth", "Premium Sound"],
  },
  {
    id: 2,
    make: "Mercedes",
    model: "E-Class",
    year: 2023,
    price: "$95/day",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],
    features: ["Massage Seats", "Panoramic Roof", "Advanced Safety", "WiFi"],
  },
  {
    id: 3,
    make: "Lexus",
    model: "ES",
    year: 2022,
    price: "$75/day",
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
    ],
    features: [
      "Hybrid Engine",
      "Mark Levinson Audio",
      "Heated/Cooled Seats",
      "Lane Assist",
    ],
  },
];

const SalesRentals: React.FC = () => {
  return (
    <section id="sales-rentals" className="py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Sales Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium Vehicles for Sale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our carefully selected collection of luxury and premium
              vehicles. Each car has been thoroughly inspected and comes with
              our quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehiclesForSale.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden select-none">
                  <Carousel
                    emulateTouch
                    swipeable
                    showThumbs={false}
                    showStatus={true}
                    infiniteLoop
                  >
                    {vehicle.images.map((src, idx) => (
                      <div key={idx}>
                        <img
                          src={src}
                          alt={`${vehicle.year} ${vehicle.make} ${
                            vehicle.model
                          } ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-900">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {vehicle.price}
                    </Badge>
                  </div>
                  {vehicle.mileage && (
                    <p className="text-gray-600">{vehicle.mileage}</p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rentals Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Luxury Vehicle Rentals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience luxury on the road with our premium rental fleet.
              Perfect for special occasions, business trips, or when you want to
              travel in style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehiclesForRent.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden select-none">
                  <Carousel emulateTouch swipeable showThumbs={false} showStatus={true} infiniteLoop>
                    {vehicle.images.map((src, idx) => (
                      <div key={idx}>
                        <img
                          src={src}
                          alt={`${vehicle.year} ${vehicle.make} ${
                            vehicle.model
                          } ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-900">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-orange border-blue-200">
                      {vehicle.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesRentals;
