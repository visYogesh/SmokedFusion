import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import vehicleData from "../data/vehicles";
import rentalsData from "../data/rentalsvehicles";

type AnyObject = Record<string, any>;

// Layout helper for modal sections
const sectionCard = (title: string, children: React.ReactNode) => (
  <Card className="mb-6 shadow-lg">
    <CardHeader>
      <CardTitle className="text-lg font-bold text-cyan-600">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

// what's App
// const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
//   navigator.userAgent
// );

// const TARGET_NUMBER = "12145974922";
// const DEFAULT_MESSAGE =
//   "Hi Sam, I have some questions about your car repair and maintenance services.";

// // Dynamic WhatsApp URL
// const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
// const waLink = `${waBase}?phone=${TARGET_NUMBER}&text=${encodeURIComponent(
//   DEFAULT_MESSAGE
// )}`;

// Recursive renderer for modal fields
const formatKey = (key: string) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const renderValue = (value: any): JSX.Element => {
  if (value == null || typeof value !== "object") {
    return <span>{String(value)}</span>;
  }
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc list-inside space-y-1">
        {value.map((item, i) => (
          <li key={i}>{renderValue(item)}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(value).map(([k, v]) => (
        <div key={k}>
          <h4 className="font-semibold">{formatKey(k)}</h4>
          {renderValue(v)}
        </div>
      ))}
    </div>
  );
};

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

interface VehicleForSale {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  images: string[];
  features: string[];
}

// Sample “for sale” data (used for listing only)
const vehiclesForSale: VehicleForSale[] = [
  {
    id: 1,
    make: "Dodge",
    model: "Ram 3500",
    year: 2008,
    price: "$7,123",
    mileage: "380,000 miles",
    images: [
      "/images/sales/dr3.jpg",
      "/images/sales/dr1.jpg",
      "/images/sales/dr2.jpg",
    ],
    features: [
      "5-Speed Automatic",
      "Heavy Duty",
      "Cummins 6.7L Diesel Turbo",
      "I6 350hp 610ft. lbs",
    ],
  },

  {
    id: 2,
    make: "Chevrolet",
    model: "C/K 10 Series",
    year: 1985,
    price: "$15,500",
    mileage: "40,000 miles",
    images: [
      "/images/sales/ch1.jpg",
      "/images/sales/ch2.jpg",
      "/images/sales/ch3.jpg",
    ],
    features: [
      "Automatic Transmission",
      "Power Steering",
      "Classic Design",
      "Restored Condition",
    ],
  },

  {
    id: 3,
    make: "Toyota",
    model: "Camry",
    year: 2012,
    price: "$10,111",
    mileage: "145,000 miles",
    images: [
      "/images/sales/ty2.jpg",
      "/images/sales/ty1.jpg",
      "/images/sales/ty3.jpg",
    ],
    features: [
      "6-Speed",
      "Gasoline",
      "2.5L I4 178hp 170ft. lbs.",
      "Shiftable Automatic",
    ],
  },
];

interface VehicleForRent {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  images: string[];
  features: string[];
}

const vehiclesForRent: VehicleForRent[] = [
  {
    id: 1,
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$85/day",
    images: [
      "/images/sales/dr1.jpg",
      "/images/sales/dr2.jpg",
      "/images/sales/dr3.jpg",
      "/images/sales/dr4.jpg",
      "/images/sales/dr5.jpg",
    ],
    features: ["Luxury Interior", "GPS", "Bluetooth", "Premium Sound"],
  },
  {
    id: 2,
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$85/day",
    images: [
      "/images/sales/dr1.jpg",
      "/images/sales/dr2.jpg",
      "/images/sales/dr3.jpg",
      "/images/sales/dr4.jpg",
      "/images/sales/dr5.jpg",
    ],
    features: ["Luxury Interior", "GPS", "Bluetooth", "Premium Sound"],
  },
  {
    id: 3,
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$85/day",
    images: [
      "/images/sales/dr1.jpg",
      "/images/sales/dr2.jpg",
      "/images/sales/dr3.jpg",
      "/images/sales/dr4.jpg",
      "/images/sales/dr5.jpg",
    ],
    features: ["Luxury Interior", "GPS", "Bluetooth", "Premium Sound"],
  },

  // ... other rentals
];

const SalesRentalsPage: React.FC = () => {
  const sendMessage = () => {
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    const TARGET_NUMBER = "12145974922";
    const carTitle = allDetails?.title || "this vehicle";
    const dynamicMessage = `Hello CarNation Elite, I'm interested in "${carTitle}" - I like this.`;

    const waBase = isMobile
      ? "whatsapp://send"
      : "https://web.whatsapp.com/send";
    const waLink = `${waBase}?phone=${TARGET_NUMBER}&text=${encodeURIComponent(
      dynamicMessage
    )}`;

    window.open(waLink, "_blank");
  };
  const sendMail = () => {
    const email = "acarnationelite@gmail.com";
    const subject = "Interest in Vehicle";
    const carTitle = allDetails?.title || "this vehicle";
    const body = `Hello CarNation Elite, I'm interested in "${carTitle}" - I like this.`;

    const mailLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailLink, "_blank");
  };

  const [allDetails, setAllDetails] = useState<AnyObject | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = allDetails ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [allDetails]);

  // JSON-LD structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "My Dealership",
    url: "https://carnationelite.com",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicles For Sale & Rent",
      itemListElement: [
        ...vehiclesForSale.map((v) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Car",
            name: `${v.year} ${v.make} ${v.model}`,
            brand: v.make,
            model: v.model,
          },
          price: v.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
        })),
        ...vehiclesForRent.map((v) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Car",
            name: `${v.year} ${v.make} ${v.model}`,
            brand: v.make,
            model: v.model,
          },
          price: v.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            name: "per day",
          },
        })),
      ],
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Premium Vehicles for Sale & Luxury Rentals | My Dealership
        </title>
        <meta
          name="description"
          content="Browse luxury cars for sale or rent—fully inspected, top-tier service at My Dealership."
        />
        <link
          rel="canonical"
          href="https://carnationelite.com"
        />
        <meta
          property="og:title"
          content="Premium Vehicles for Sale & Rentals"
        />
        <meta
          property="og:description"
          content="Discover our premium fleet for sale and rent. Quality guarantee and luxury experience."
        />
        <meta
          property="og:image"
          content="/images/car1.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section
        id="sales-rentals"
        className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"
      >
        <div className="container mx-auto px-4">
          {/* ===== Sales ===== */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-pink-600 mb-4 select-none">
                Vehicles for Sale
              </h2>
              <p className="text-xl text-purple-500 max-w-3xl mx-auto py-4">
                Discover our carefully selected collection of luxury and premium
                vehicles for sale.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {vehiclesForSale.map((v, idx) => (
                <motion.article
                  key={v.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="cursor-pointer"
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300 shadow-lg bg-white select-none">
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <Carousel
                        emulateTouch
                        swipeable
                        showThumbs={false}
                        infiniteLoop
                      >
                        {v.images.map((src, i) => (
                          <div key={i}>
                            <img
                              src={src}
                              alt={`${v.year} ${v.make} ${v.model} image ${
                                i + 1
                              }`}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-900">
                          {v.year} {v.make} {v.model}
                        </CardTitle>
                        <Badge className="bg-green-100 text-green-800">
                          {v.price}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{v.mileage}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {v.features.map((f, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-600 rounded-full" />
                            <span className="text-sm text-gray-700">{f}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => {
                          // Now passes only the matching vehicleData object
                          if (vehicleData[idx]) {
                            setAllDetails(vehicleData[idx]);
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* ===== Rentals ===== */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-pink-600 mb-4">
                Vehicles For Rentals
              </h2>
              <p className="text-xl text-purple-500 max-w-3xl mx-auto py-4">
                Experience luxury on the road with our premium rental fleet.
              </p>
            </div>

            <div className="container">
              <h1 className="text-5xl text-center text-gray-300">
                We Will Bring Rentals Soon{" "}
              </h1>
            </div>

            {/* we will bring rentals soon..... */}
            {/* <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {vehiclesForRent.map((v, idx) => (
                <motion.article
                  key={v.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="cursor-pointer"
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300 shadow-lg bg-white select-none">
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <Carousel
                        emulateTouch
                        swipeable
                        showThumbs={false}
                        infiniteLoop
                      >
                        {v.images.map((src, i) => (
                          <div key={i}>
                            <img
                              src={src}
                              alt={`${v.year} ${v.make} ${v.model} image ${
                                i + 1
                              }`}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-900">
                          {v.year} {v.make} {v.model}
                        </CardTitle>
                        <Badge className="bg-blue-100 text-blue-800">
                          {v.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {v.features.map((f, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="text-sm text-gray-700">{f}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => {
                          if (rentalsData[idx]) {
                            setAllDetails(rentalsData[idx]);
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* ===== Full Data Modal ===== */}
      {allDetails && (
        <div
          onClick={() => setAllDetails(null)}
          className="select-none fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative bg-white rounded-lg shadow-xl overflow-auto w-full max-h-[90vh]
              sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2
              p-4 sm:p-6 md:p-8
            "
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {allDetails.title || "Vehicle Details"}
              </h2>
              <button
                onClick={() => setAllDetails(null)}
                className="absolute text-red-600 hover:text-red-900 text-6xl top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6"
              >
                ×
              </button>
            </div>

            {/* Summary */}
            {sectionCard(
              "Summary",
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold">Price</h4>
                  <p className="text-gray-700">${allDetails.price_usd}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Mileage</h4>
                  <p className="text-gray-700">
                    {allDetails.mileage_miles} miles
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Condition</h4>
                  <p className="text-gray-700">
                    {allDetails.vehicle_info.condition}
                  </p>
                </div>
              </div>
            )}

            {/* Gallery */}
            {sectionCard(
              "Gallery",
              <Carousel emulateTouch swipeable showThumbs={false} infiniteLoop>
                {allDetails.images.map((src: string, i: number) => (
                  <div key={i} className="aspect-video">
                    <img
                      src={src}
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            )}

            {/* All other fields */}
            {Object.entries(allDetails)
              .filter(
                ([k]) =>
                  ![
                    "title",
                    "price_usd",
                    "mileage_miles",
                    "images",
                    "vehicle_info",
                  ].includes(k)
              )

              .map(([k, v]) => sectionCard(formatKey(k), renderValue(v)))}

            <div className="container flex justify-center items-center">
              <div className="my-4 py-12 sm:py-0 sm:my-0 flex flex-wrap gap-4 justify-center">
                <button
                  onClick={sendMail}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Mail
                </button>

                <button
                  onClick={sendMessage}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send WhatsApp
                </button>

                <button
                  onClick={() => setAllDetails(null)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </HelmetProvider>
  );
};

export default SalesRentalsPage;
