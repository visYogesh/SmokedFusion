// data/BlogServices.ts
export interface Service {
  title: string;
  description: string;
  features: string[];
  // you can add more fields later, e.g. `details?: string[];`
}


const services: Service[] = [
  {
    title: "Auto Repair Service OPP",
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


export default services;