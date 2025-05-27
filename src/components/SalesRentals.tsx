import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage?: string;
  page?: string; // Optional for vehicles for sale
  images: string[];
  features: string[];
}

const vehiclesForSale: Vehicle[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2012,
    price: "$ 10,111",
    mileage: "145,000 miles",
    page: "https://www.carnationelite.com/Inventory/Details/b5312006-18f1-4293-bff1-b02eb42ecb45",
    images: [
      "/images/sales/ty2.jpg",
      "/images/sales/ty1.jpg",
      "/images/sales/ty3.jpg",
      "/images/sales/ty4.jpg",
      "/images/sales/ty5.jpg",
      "/images/sales/ty6.jpg",
      "/images/sales/ty7.jpg",
      "/images/sales/ty8.jpg",
    ],
    features: ["6-Speed ", "Gasoline", "2.5L I4 178hp 170ft. lbs.", "Shiftable Automatic"],
  },
  {
    id: 2,
    make: "Chevrolet",
    model: "c/k 10 Series",
    year: 1985,
    price: "$ 15,500",
    mileage: "40,000 miles",
    page:"https://www.carnationelite.com/Inventory/Details/6e5f7477-b962-4022-b738-faf17f221301",
    images: [
      "/images/sales/ch1.jpg",
      "/images/sales/ch2.jpg",
      "/images/sales/ch3.jpg",
      "/images/sales/ch4.jpg",
      "/images/sales/ch5.jpg",
    ],
    features: ["Automatic Transmission", "Power Steering", "Classic Design", "Restored Condition"],
  },
  {
    id: 3,
    make: "Dodge",
    model: "Ram 3500",
    year: 2008,
    price: "$ 7123",
    mileage: "380,000 miles",
    page:"https://www.carnationelite.com/Inventory/Details/8831e729-6934-4b0a-9236-d0a58495b5da",
    images: [
      "/images/sales/dr3.jpg",
      "/images/sales/dr1.jpg",
      "/images/sales/dr2.jpg",
      "/images/sales/dr4.jpg",
      "/images/sales/dr5.jpg",
      "/images/sales/dr7.jpg",
    ],
    features: ["5-Speed Automatic", "Heavy Duty", "Cummins 6.7L Diesel Turbo", "I6 350hp 610ft. lbs"],
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

// Variants for animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const SalesRentals: React.FC = () => {
  return (
    <section id="sales-rentals" className="py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Sales Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-600 mb-4">
              Premium Vehicles for Sale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto py-4">
              Discover our carefully selected collection of luxury and premium
              vehicles. Each car has been thoroughly inspected and comes with
              our quality guarantee.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {vehiclesForSale.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="cursor-pointer"
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden select-none">
                    <Carousel
                      emulateTouch
                      swipeable
                      showThumbs={false}
                      showStatus={true}
                      infiniteLoop
                    >
                      {vehicle.images.map((src, imgIdx) => (
                        <div key={imgIdx}>
                          <img
                            src={src}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} ${imgIdx + 1}`}
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
                      <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                        {vehicle.price}
                      </Badge>
                    </div>
                    {vehicle.mileage && (
                      <p className="text-gray-600">{vehicle.mileage}</p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 py-4">
                      {vehicle.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 ">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button onClick={() => {window.open(vehicle.page, "_blank")}}  className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Rentals Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-600 mb-4">
              Luxury Vehicle Rentals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto py-4">
              Experience luxury on the road with our premium rental fleet.
              Perfect for special occasions, business trips, or when you want to
              travel in style.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {vehiclesForRent.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="cursor-pointer"
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden select-none">
                    <Carousel
                      emulateTouch
                      swipeable
                      showThumbs={false}
                      showStatus={true}
                      infiniteLoop
                    >
                      {vehicle.images.map((src, imgIdx) => (
                        <div key={imgIdx}>
                          <img
                            src={src}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} ${imgIdx + 1}`}
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
                      {vehicle.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SalesRentals;
