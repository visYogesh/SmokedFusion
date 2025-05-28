import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    title: "Auto Repair Service",
    description: "Comprehensive auto repair services for all makes and models of vehicles.",
    features: ["Engine diagnostics", "Brake repair", "Transmission service"],
  },
  {
    title: "Oil Change",
    description:"Quick and efficient oil change services to keep your engine healthy",
    features: ["Conventional oil", "Synthetic oil", "Filter replacement"],
  },
  {
    title: "Tire Rotation",
    description:"Improve tire life and performance with regular rotation services for your vehicle.",
    features: ["Four-wheel rotation", "Alignment check", "Tire pressure"],
  },
  {
    title: "Brake Pads Replacement",
    description:
      "High-quality brake pad replacement for enhanced safety and performance",
    features: ["OEM parts", "Performance upgrades", "Safety checks"],
  },
  {
    title: "Battery Replacement",
    description:
      "Professional services to keep your vehicle’s electrical system functioning smoothly.",
    features: [
      "Battery testing",
      "Installation",
      "Assessment of electrical system",
    ],
  },
  {
    title: "Transmission Oil Change",
    description:
      "Essential transmission oil change services to prolong the life of your transmission",
    features: ["Fluid replacement", "Filter change", "System flush"],
  },
  {
    title: "Engine Diagnostics",
    description:
      "Advanced engine diagnostics to identify and resolve performance issues",
    features: ["Check engine light", "Performance issues", "Fuel efficiency"],
  },
  {
    title: "AC System Repair",
    description:
      "Comprehensive AC system repair services to ensure your comfort on the road",
    features: [
      "Compressor replacement",
      "Condenser repair",
      "System diagnostics",
    ],
  },
  {
    title: "AC System Freon",
    description:
      "Keep your vehicle cool with our AC system freon recharge service efficiently",
    features: ["Leak detection", "Freon refill", "System inspection"],
  },
  {
    title: "Suspension Repair",
    description:
      "Expert suspension repair services to enhance ride quality and handling",
    features: [
      "Shock absorber replacement",
      "Strut repair",
      "Alignment services",
    ],
  },
  {
    title: "Exhaust System Repair",
    description:
      "Professional exhaust system repair services to reduce noise and emissions",
    features: ["Muffler replacement", "Pipe repair", "Emissions testing"],
  },
  {
    title: "Radiator Repair",
    description:
      "Comprehensive radiator repair and replacement services to prevent overheating",
    features: ["Leak repair", "Coolant flush", "Thermostat replacement"],
  },
  {
    title: "Timing Belt Replacement",
    description:
      "Essential timing belt replacement services to prevent engine damage and ensure longevity",
    features: ["Belt inspection", "Replacement", "Tensioner check"],
  },
  {
    title: "Spark Plug Replacement",
    description:
      "High-quality spark plug replacement to improve engine performance and fuel efficiency",
    features: ["OEM spark plugs", "Performance upgrades", "Installation"],
  
  },
  {
    title: "Fuel System Repair",
    description:
      "Comprehensive fuel system repair services to ensure optimal engine performance",
    features: ["Fuel injector cleaning", "Pump replacement", "Filter change"],
  },
  {
    title: "Electrical System Repair",
    description:
      "Expert electrical system repair services to resolve issues with lights, sensors, and more",
    features: ["Wiring repair", "Sensor replacement", "Battery diagnostics"],
  },
  {
    title: "Windshield Replacement",
    description:
      "Professional windshield replacement services to ensure safety and visibility",
    features: ["OEM glass", "Calibrated installation", "Leak testing"],
  
  },
  {
    "title": "Alternator Replacement",
    "description": "Replace your vehicle's alternator to restore charging system functionality.",
    "features": ["Battery testing", "New alternator installation", "Belt inspection"]
  },
  {
    "title": "Starter Motor Replacement",
    "description": "Ensure reliable engine starts by replacing a faulty starter motor.",
    "features": ["Electrical system check", "New starter installation", "Connection inspection"]
  },
  {
    "title": "Heater Core Replacement",
    "description": "Restore cabin heat and defogging with a new heater core.",
    "features": ["Coolant flush", "New heater core installation", "HVAC system inspection"]
  },
  {
    "title": "Water Pump Replacement",
    "description": "Keep your engine cool with professional water pump replacement.",
    "features": ["Coolant drain/refill", "Pump installation", "Gasket/seal check"]
  },
  {
    "title": "Fuel Injector Cleaning",
    "description": "Improve engine performance and fuel efficiency with injector cleaning.",
    "features": ["Carbon removal", "Injector testing", "Improved spray pattern"]
  },
  {
    "title": "Head Gasket Replacement",
    "description": "Repair engine leaks and overheating by replacing the head gasket.",
    "features": ["Cylinder head removal", "New gasket install", "Coolant & oil flush"]
  },
  {
    "title": "Power Steering Repair",
    "description": "Restore easy steering with expert power steering system repair.",
    "features": ["Fluid replacement", "Pump and hose inspection", "Leak repair"]
  },
  {
    "title": "Ignition System Repair",
    "description": "Fix engine misfires and starting issues with ignition repairs.",
    "features": ["Spark plug replacement", "Ignition coil test", "Timing adjustment"]
  },
  {
    "title": "Drive Belt Replacement",
    "description": "Replace worn drive belts for optimal accessory performance.",
    "features": ["Belt inspection", "New belt install", "Tension adjustment"]
  },
  {
    "title": "Differential Service",
    "description": "Maintain smooth turning and traction with differential servicing.",
    "features": ["Fluid change", "Seal inspection", "Gear check"]
  },
  {
    "title": "Throttle Body Cleaning",
    "description": "Enhance throttle response and idle quality with cleaning.",
    "features": ["Carbon removal", "Idle control check", "Sensor inspection"]
  },
  {
    "title": "EGR Valve Replacement",
    "description": "Replace a faulty EGR valve to reduce emissions and improve performance.",
    "features": ["Exhaust flow test", "New valve install", "Vacuum hose check"]
  },
  {
    "title": "Oxygen Sensor Replacement",
    "description": "Improve fuel efficiency and reduce emissions with a new O2 sensor.",
    "features": ["Sensor diagnostics", "New O2 sensor install", "Check engine light reset"]
  },
  {
    "title": "Camshaft Replacement",
    "description": "Restore proper engine timing and performance by replacing the camshaft.",
    "features": ["Engine disassembly", "New camshaft install", "Timing chain inspection"]
  },
  {
    "title": "Crankshaft Replacement",
    "description": "Fix engine knocking and vibration with a crankshaft replacement.",
    "features": ["Bottom end disassembly", "New crankshaft install", "Bearing replacement"]
  },
  {
    "title": "Valve Adjustment",
    "description": "Ensure optimal engine compression and efficiency by adjusting valves.",
    "features": ["Clearance measurement", "Adjustment with feeler gauges", "Noise reduction"]
  },
  {
    "title": "Cylinder Head Replacement",
    "description": "Restore engine performance with a new or rebuilt cylinder head.",
    "features": ["Old head removal", "New head install", "Gasket and seal replacement"]
  },
  {
    "title": "Turbocharger Repair/Replacement",
    "description": "Regain engine boost and performance with turbo service.",
    "features": ["Boost pressure test", "Turbo install", "Oil line inspection"]
  },
  {
    "title": "Emission System Repair",
    "description": "Pass emissions tests and protect the environment with repairs.",
    "features": ["Component inspection", "Sensor replacement", "System leak detection"]
  },
  {
    "title": "Catalytic Converter Replacement",
    "description": "Reduce exhaust pollutants with a new catalytic converter.",
    "features": ["Emission test", "New converter install", "Welding and fitting"]
  },
  {
    "title": "Radiator Hose Replacement",
    "description": "Prevent overheating by replacing worn or cracked radiator hoses.",
    "features": ["Coolant drain", "New hose install", "Clamp and seal inspection"]
  },
  {
    "title": "Serpentine Belt Replacement",
    "description": "Maintain accessory performance with a new serpentine belt.",
    "features": ["Belt tension check", "Belt installation", "Pulley inspection"]
  },
  {
    "title": "AC Compressor Replacement",
    "description": "Restore your car’s cooling system with a new AC compressor.",
    "features": ["Refrigerant recovery", "New compressor install", "System recharge"]
  },
  {
    "title": "Cooling Fan Replacement",
    "description": "Keep your engine at the right temperature with fan replacement.",
    "features": ["Fan motor install", "Relay check", "Temperature sensor inspection"]
  },
  {
    "title": "Fuel Pump Replacement",
    "description": "Ensure reliable fuel delivery with a fuel pump replacement.",
    "features": ["Fuel pressure test", "Pump install", "Fuel line check"]
  },
  {
    "title": "Thermostat Replacement",
    "description": "Fix engine overheating and poor heating with a new thermostat.",
    "features": ["Coolant system drain", "Thermostat install", "Seal and gasket check"]
  },
  {
    "title": "Control Arm Replacement",
    "description": "Improve handling and suspension with new control arms.",
    "features": ["Bushing replacement", "Arm installation", "Alignment check"]
  },
  {
    "title": "Timing Chain Replacement",
    "description": "Maintain engine timing and performance with a new timing chain.",
    "features": ["Chain removal", "Tensioner install", "Timing adjustment"]
  },
  {
    "title": "Transmission Mount Replacement",
    "description": "Reduce vibrations and secure transmission with new mounts.",
    "features": ["Mount inspection", "Rubber or polyurethane options", "Secure installation"]
  },
  ];

const allServices = [
  "A/C & Heating Repair",
  "Alternator Repair & Replacement",
  "Belt Repair & Replacement",
  "Brake Repair & Replacement",
  "Chassis & Suspension Repair",
  "Check Engine Light Diagnostics",
  "Compressor Repair & Replacement",
  "Computer Diagnostics",
  "Cooling System Repair",
  "Drivability Diagnostics & Repair",
  "Engine Performance Check",
  "Engine Repair & Replacement",
  "Evaporator Repair & Replacement",
  "Heating System Repair & Service",
  "Hose Replacement",
  "Ignition System Repair",
  "Light Repair & Bulb Replacements",
  "Maintenance Inspections",
  "Muffler Repair & Replacement",
  "Oil Changes",
  "Power Accessory Repair",
  "Power Antenna Repair",
  "Power Lock Repair",
  "Power Steering Repair",
  "Power Window Repair",
  "Radiator Repair & Replacement",
  "Safety & Emissions Inspections",
  "Shocks & Struts Repair",
  "Suspension",
  "Tailpipe Repair & Replacement",
  "Transmission Repair & Replacement",
  "Trip Inspections",
  "Tune Ups",
  "State Inspections",
  "Water Pump Repair & Replacement",
  "Windshield Wiper Blades & Repair",
  "Filter Replacements",
  "Fluid Services",
  "Fuel Injection Repair & Service",
  "Fuel System Repair & Maintenance",
  "Starting/Charging System",
  "Exhaust"
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const hoverTransition = { type: "tween", duration: 0.2, ease: "easeOut" };

const Services: React.FC = () => {
  const initialCount = 8;
  const loadSize = 4;
  const [visibleCount, setVisibleCount] = useState(
    services.length > initialCount ? initialCount : services.length
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadSize, services.length));
  };

  const visibleServices = services
    .map((service, originalIndex) => ({ service, originalIndex }))
    .slice(0, visibleCount);

  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-600 mb-6">
            Comprehensive Auto Services
          </h2>
          <p className="text-xl text-purple-500 max-w-3xl mx-auto py-2">
            From routine maintenance to complex repairs, our certified
            technicians provide expert service for all makes and models.
          </p>
        </div>
      </div>

      {/* Full-width panel with inset content */}
      <div className="w-full py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="bg-gray-300 rounded-2xl border-4 border-purple-700 p-6">
            <h3 className="text-2xl font-semibold text-center text-slate-900 mb-6">
              Services We Provide
            </h3>
            {/* Use grid to align bullets and text */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-y-2 gap-x-8 text-gray-800">
  {allServices.map((item) => (
    <li key={item} className="flex items-start">
      <span className="mt-1 flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full"></span>
      <span className="ml-2 leading-tight">{item}</span>
    </li>
  ))}
</ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleServices.map(({ service, originalIndex }, idx) => (
            <motion.div
              key={originalIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03, transition: hoverTransition }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "tween",
                duration: 0.4,
                delay: (idx % loadSize) * 0.25,
              }}
            >
              <Card className="border-0 shadow-lg bg-gray-200 flex flex-col h-full min-h-[350px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-slate-900 text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow p-6 space-y-4">
                  <div>
                    <p className="text-gray-700 mb-4 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-base text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Button asChild className="w-32">
                      <a
                        href={`#blog${originalIndex + 1}`}
                        className="inline-block text-center"
                      >
                        More Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleCount < services.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="p-3 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              <ChevronDown className="text-white" size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
export { services };
