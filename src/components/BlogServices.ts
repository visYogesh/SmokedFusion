export interface Service {
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Auto Repair Service",
    description: `Our Auto Repair Service OPP provides thorough maintenance and repair solutions for every vehicle type.
From advanced engine diagnostics to brake system overhauls, our certified technicians use OEM parts and the latest tools.
We back up all repairs with a 12‑month/12,000‑mile warranty for your peace of mind.
Post-repair, we conduct a comprehensive road test and share a detailed service report.
Customers enjoy complimentary safety inspections and scheduled reminders for upcoming maintenance.`,
    features: [
      "Engine diagnostics",
      "Brake repair",
      "Transmission service",
      "OEM parts guarantee",
      "12-month/12,000-mile warranty",
      "Road test validation"
    ],
  },
  {
    title: "Oil Change",
    description: `Our Oil Change service uses top-grade conventional or synthetic oils matched to your vehicle.
We perform a full drain and refill, replace the oil filter with a premium unit, and eliminate sludge buildup.
Each service includes a multi-point safety check on belts, hoses, and fluid reservoirs.
We dispose of used oil responsibly through certified recycling programs.
Your service history is recorded and reminders are sent when the next change is due.`,
    features: [
      "Conventional oil",
      "Synthetic oil",
      "Premium filter replacement",
      "Multi-point safety check",
      "Eco-friendly disposal",
      "Maintenance reminders"
    ],
  },
  {
    title: "Tire Rotation",
    description: `Extend tire life and improve handling with our professional Tire Rotation service.
We inspect tread wear, measure depth, and rotate tires according to the manufacturer’s guidelines.
Alignment checks are performed and tire pressures are adjusted for optimal performance.
Balancing reduces vibration and ensures even wear across all four tires.
A detailed wear report is provided, and next rotation scheduling is taken care of.`,
    features: [
      "Four-wheel rotation",
      "Alignment inspection",
      "Pressure adjustment",
      "Tread depth measurement",
      "Balancing",
      "Rotation reminders"
    ],
  },
  {
    title: "Brake Pads Replacement",
    description: `Our Brake Pads Replacement service guarantees reliable braking performance.
We remove worn pads, inspect rotors and calipers, and install high-quality OEM or upgraded pads.
Brake fluid is flushed or topped up, and hydraulic integrity is tested to prevent leaks.
A thorough safety check and road test confirm stopping power and system health.
Customers receive a comprehensive brake system report with future recommendations.`,
    features: [
      "OEM brake pads",
      "Performance upgrades",
      "Rotor inspection",
      "Brake fluid service",
      "Safety road test",
      "System health report"
    ],
  },
  {
    title: "Battery Replacement",
    description: `We start our Battery Replacement with an in-depth load test to assess battery health.
Next, we select the optimal replacement based on your vehicle’s specifications and driving needs.
Installation is secured with proper connections, and the charging system is scanned for faults.
Old batteries are recycled responsibly through certified partners.
Finally, you receive a battery health report and tips to extend its lifespan.`,
    features: [
      "Load testing",
      "Exact battery match",
      "Professional installation",
      "Certified recycling",
      "Charging system scan",
      "Health report"
    ],
  },
  {
    title: "Transmission Oil Change",
    description: `Protect your transmission with a complete oil and filter replacement using OEM-grade fluid.
We perform a system flush to remove contaminants and inspect the pan and gasket for wear.
After refilling, a test drive ensures smooth shifts under varying loads.
Gaskets and seals are checked to prevent future leaks.
Automated reminders notify you when the next service interval approaches.`,
    features: [
      "Fluid and filter replacement",
      "System flush",
      "Pan and gasket check",
      "Test drive validation",
      "Leak inspection",
      "Service reminders"
    ],
  },
  {
    title: "Engine Diagnostics",
    description: `Utilizing advanced scan tools, our Engine Diagnostics service reads all fault codes and live data.
We analyze performance parameters, including fuel trim, RPM stability, and sensor outputs.
A detailed diagnostic report outlines issues, causes, and recommended repairs.
Techs perform visual inspections and road tests to correlate data findings.
Follow-up consultations ensure you understand each finding and repair plan.`,
    features: [
      "Fault code analysis",
      "Live data monitoring",
      "Performance evaluation",
      "Visual inspection",
      "Road test correlation",
      "Diagnostic report"
    ],
  },
  {
    title: "AC System Repair",
    description: `Stay cool in any weather with our AC System Repair service.
We diagnose leaks, replace compressors or condensers, and recharge refrigerant to spec.
System pressures are tested to ensure no leaks remain.
A performance check verifies temperature drop and airflow strength.
All AC repairs include a 6-month performance warranty.`,
    features: [
      "Leak detection",
      "Compressor/condensor replacement",
      "Refrigerant recharge",
      "Pressure testing",
      "Cooling performance check",
      "6-month warranty"
    ],
  },
  {
    title: "AC System Freon",
    description: `Our Freon recharge service restores your vehicle’s cooling efficiency.
We evacuate old refrigerant, perform vacuum testing, and refill with manufacturer-approved refrigerant.
Leak detection is conducted throughout service to ensure system integrity.
A final temperature test confirms cooling performance to factory standards.
Service records are maintained for future reference.`,
    features: [
      "Evacuation and vacuum test",
      "Freon refill",
      "Leak detection",
      "Temperature verification",
      "Factory spec charge",
      "Service logging"
    ],
  },
  {
    title: "Suspension Repair",
    description: `Enhance ride comfort and vehicle control with our Suspension Repair service.
We inspect and replace shocks, struts, bushings, and control arms as needed.
Alignment and ride height adjustments ensure proper handling.
A road test evaluates performance under real-world conditions.
You receive a suspension health report and future maintenance plan.`,
    features: [
      "Shock/strut replacement",
      "Bushing and control arm service",
      "Alignment adjustment",
      "Ride height calibration",
      "Performance road test",
      "Health report"
    ],
  },
  {
    title: "Exhaust System Repair",
    description: `Our Exhaust System Repair reduces noise and ensures emission compliance.
We locate and seal leaks, replace mufflers or pipes, and inspect hangers and mounts.
Emissions tests confirm regulatory compliance.
A noise level assessment ensures passenger comfort.
All repairs include corrosion-resistant coatings for longevity.`,
    features: [
      "Leak sealing",
      "Muffler and pipe replacement",
      "Emission testing",
      "Noise assessment",
      "Mount inspection",
      "Anti-corrosion coating"
    ],
  },
  {
    title: "Radiator Repair",
    description: `Prevent engine overheating with our comprehensive Radiator Repair service.
We inspect for cracks or leaks, seal minor damages, or replace with high-quality units.
Coolant flush and refill restore optimal thermal efficiency.
Pressure testing ensures the system holds leak-free.
Temperature sensor checks confirm accurate readings.`,
    features: [
      "Leak repair or replacement",
      "Coolant flush",
      "Pressure testing",
      "Sensor inspection",
      "Thermostat check",
      "Thermal efficiency test"
    ],
  },
  {
    title: "Timing Belt Replacement",
    description: `Avoid catastrophic engine damage with precise Timing Belt Replacement.
We remove and replace the belt, tensioner, and associated components.
Chain alignment is verified against manufacturer specs.
Water pump inspection is included to prevent adjacent failures.
Timing accuracy is tested under no-load and load conditions.`,
    features: [
      "Belt and tensioner swap",
      "Component inspection",
      "Alignment verification",
      "Water pump check",
      "Load testing",
      "Interval reminders"
    ],
  },
  {
    title: "Spark Plug Replacement",
    description: `Boost performance and economy with our Spark Plug Replacement service.
We remove worn plugs, check electrode condition, and install OEM or performance-grade plugs.
Ignition coil and wire inspections ensure consistent spark delivery.
Fuel system balance is tested to optimize combustion.
Service records include gap settings and part specs.`,
    features: [
      "OEM/performance plugs",
      "Electrode inspection",
      "Ignition component check",
      "Combustion test",
      "Gap verification",
      "Service log"
    ],
  },
  {
    title: "Fuel System Repair",
    description: `Our Fuel System Repair removes deposits and restores injection precision.
Injector cleaning and testing eliminate spray pattern issues.
Fuel filter and pump inspections ensure consistent flow.
Pressure regulation is tested under varying engine loads.
Emission analysis confirms reduced pollutants.`,
    features: [
      "Injector cleaning",
      "Filter replacement",
      "Pump inspection",
      "Pressure testing",
      "Emission check",
      "Performance report"
    ],
  },
  {
    title: "Electrical System Repair",
    description: `Diagnose and fix electrical faults from headlights to ECU sensors.
We perform wiring repairs, sensor replacements, and full battery/alternator tests.
Ground points are cleaned and inspected for continuity.
Diagnostic scans clear and verify all fault codes.
Post-repair load tests ensure system stability.`,
    features: [
      "Wiring repair",
      "Sensor swap",
      "Battery/alternator test",
      "Ground inspection",
      "ECU scan",
      "Load testing"
    ],
  },
  {
    title: "Windshield Replacement",
    description: `Maintain visibility and safety with our Windshield Replacement service.
We remove damaged glass and install OEM or OEM-equivalent windshields.
Precise calibration for ADAS cameras and sensors restores functionality.
Leak tests and seal inspections prevent moisture intrusion.
UV protectant primers extend windshield lifespan.`,
    features: [
      "OEM glass",
      "ADAS calibration",
      "Leak testing",
      "Seal inspection",
      "UV primer",
      "Warranty"
    ],
  },
  {
    title: "Alternator Replacement",
    description: `Ensure your charging system works flawlessly with Alternator Replacement.
We test output under load, replace the unit, and retest voltage regulation.
Drive belts and pulleys are inspected for wear.
Electrical connections are cleaned and tightened.
A post-service battery recharge test confirms proper function.`,
    features: [
      "Output testing",
      "Unit replacement",
      "Belt inspection",
      "Connection cleaning",
      "Voltage retest",
      "Charging test"
    ],
  },
  {
    title: "Starter Motor Replacement",
    description: `Eliminate no-start issues with professional Starter Motor Replacement.
We diagnose solenoid and motor health, swap in a new unit, and test cranking speed.
Battery and cable inspections ensure full power delivery.
Voltage drop tests confirm efficient current flow.
A cold-crank test validates performance in all conditions.`,
    features: [
      "Solenoid diagnosis",
      "Motor replacement",
      "Cable inspection",
      "Voltage drop test",
      "Crank speed test",
      "Cold-crank validation"
    ],
  },
  {
    title: "Heater Core Replacement",
    description: `Keep your cabin warm and your defroster effective with Heater Core Replacement.
We flush and drain coolant, replace the core, and refill with fresh mixture.
HVAC system inspection ensures proper airflow and temperature control.
Leak tests confirm a sealed heating circuit.
A final temperature output check guarantees performance.`,
    features: [
      "Coolant flush",
      "Core swap",
      "HVAC inspection",
      "Leak testing",
      "Temperature verification",
      "Performance report"
    ],
  },
  {
    title: "Water Pump Replacement",
    description: `Protect your engine from overheating with Water Pump Replacement.
We drain coolant, replace the pump and gasket, then refill with proper coolant.
Pressure tests verify no leaks at seals.
Thermostat checks ensure correct opening/closing temperatures.
A road test monitors operating temperatures under load.`,
    features: [
      "Pump and gasket replacement",
      "Coolant refill",
      "Pressure testing",
      "Thermostat check",
      "Leak inspection",
      "Temperature monitoring"
    ],
  },
  {
    title: "Fuel Injector Cleaning",
    description: `Restore engine smoothness with our Fuel Injector Cleaning service.
We remove carbon buildup and test spray patterns for proper atomization.
Fuel pressure checks ensure consistent delivery.
Post-cleaning dynamometer tests measure horsepower gains.
Emission tests confirm reduced exhaust pollutants.`,
    features: [
      "Carbon removal",
      "Pattern testing",
      "Pressure check",
      "Dyno validation",
      "Emission check",
      "Performance report"
    ],
  },
  {
    title: "Head Gasket Replacement",
    description: `Resolve leaks and overheating with Head Gasket Replacement.
We remove and machine the cylinder head, install a new gasket, and torque to spec.
Full coolant and oil flushes remove contaminants.
Compression tests ensure proper sealing.
A final thermal cycle test confirms reliability.`,
    features: [
      "Head removal/installation",
      "Gasket swap",
      "Flush services",
      "Compression testing",
      "Thermal cycling",
      "Reliability check"
    ],
  },
  {
    title: "Power Steering Repair",
    description: `Regain effortless steering with Power Steering Repair.
We inspect pumps, hoses, and fluid levels, replacing components as needed.
Leak sealing and reservoir cleaning prevent future issues.
Belt tension and pulley alignments ensure consistent performance.
A steering response test verifies repair quality.`,
    features: [
      "Pump and hose inspection",
      "Fluid service",
      "Leak sealing",
      "Belt and pulley check",
      "Response test",
      "Maintenance tips"
    ],
  },
  {
    title: "Ignition System Repair",
    description: `Eliminate misfires and tough starts with Ignition System Repair.
Coils, wires, and spark plugs are tested and replaced if necessary.
Timing adjustments align spark events optimally.
ECU diagnostics clear fault codes and verify readiness.
Idle stability tests confirm a smooth running engine.`,
    features: [
      "Coil and wire testing",
      "Spark plug swap",
      "Timing tuning",
      "ECU scan",
      "Idle test",
      "Performance validation"
    ],
  },
  {
    title: "Drive Belt Replacement",
    description: `Keep engine accessories functioning with Drive Belt Replacement.
We remove and inspect the old belt and pulleys, swap in a new belt, and adjust tension.
Pulley bearings are checked for smooth rotation.
Accessory function tests ensure alternator, pump, and compressor operation.
A vibration test confirms system balance.`,
    features: [
      "Belt swap",
      "Tension adjustment",
      "Pulley inspection",
      "Accessory testing",
      "Bearing check",
      "Vibration test"
    ],
  },
  {
    title: "Differential Service",
    description: `Maintain smooth turns with our Differential Service.
We drain old fluid, inspect seals and bearings, and refill with premium fluid.
Backlash measurements verify gear mesh accuracy.
Road tests under load confirm noise-free operation.
Service reminders keep your differential in top shape.`,
    features: [
      "Fluid change",
      "Seal inspection",
      "Bearing check",
      "Backlash measurement",
      "Road test",
      "Maintenance reminders"
    ],
  },
  {
    title: "Throttle Body Cleaning",
    description: `Improve throttle response and idle smoothness with Throttle Body Cleaning.
We remove carbon deposits from the throttle plate and bore.
Sensor recalibration ensures accurate airflow readings.
Idle control tests verify stability.
A performance log documents pre- and post-cleanup gains.`,
    features: [
      "Carbon removal",
      "Sensor recalibration",
      "Idle stability test",
      "Airflow optimization",
      "Performance logging",
      "Maintenance tips"
    ],
  },
  {
    title: "EGR Valve Replacement",
    description: `Reduce emissions and restore performance with EGR Valve Replacement.
Exhaust flow tests identify blockages, and old valves are swapped for new units.
Vacuum system checks ensure proper valve actuation.
ECU resets clear related fault codes.
Emission tests confirm compliance.`,
    features: [
      "Flow testing",
      "Valve swap",
      "Vacuum check",
      "ECU reset",
      "Emission testing",
      "Regulatory compliance"
    ],
  },
  {
    title: "Oxygen Sensor Replacement",
    description: `Optimize fuel efficiency with Oxygen Sensor Replacement.
We diagnose sensor readings, replace faulty sensors, and reset engine codes.
Fuel trim adjustments ensure proper air/fuel mixtures.
Post-install live data confirms sensor accuracy.
Emission retests verify reduced pollutants.`,
    features: [
      "Sensor diagnostics",
      "Replacement",
      "Code reset",
      "Fuel trim tuning",
      "Live data check",
      "Emission verification"
    ],
  },
  {
    title: "Camshaft Replacement",
    description: `Restore engine timing and performance with Camshaft Replacement.
We remove timing covers, swap out the camshaft, and inspect chains and guides.
Alignment is set to manufacturer specifications.
Post-replacement timing tests verify accuracy.
A performance dyno test confirms power delivery.`,
    features: [
      "Cam swap",
      "Chain/guide inspection",
      "Alignment setup",
      "Timing test",
      "Dyno validation",
      "Torque spec checks"
    ],
  },
  {
    title: "Crankshaft Replacement",
    description: `Fix knocking and vibration issues with Crankshaft Replacement.
We disassemble the bottom end, replace journals and bearings, and install a new crankshaft.
Clearances are measured to OEM tolerances.
Balance testing reduces harmonic vibrations.
Road tests confirm smooth operation.`,
    features: [
      "Crank swap",
      "Bearing replacement",
      "Tolerance measurement",
      "Balance test",
      "Harmonic analysis",
      "Performance test"
    ],
  },
  {
    title: "Valve Adjustment",
    description: `Maintain optimal engine compression and reduce noise with Valve Adjustments.
Using precise feeler gauges, we set lash clearances per spec.
Compression tests ensure cylinder health.
Idle and performance tests verify smooth operation.
Adjustment records help track future maintenance needs.`,
    features: [
      "Lash setting",
      "Compression check",
      "Idle test",
      "Noise reduction",
      "Adjustment log",
      "Maintenance scheduling"
    ],
  },
  {
    title: "Cylinder Head Replacement",
    description: `Rebuild your engine’s top end with Cylinder Head Replacement.
We remove, inspect, and machine or replace the head and associated gaskets.
Pressure testing checks for cracks or leaks.
Valve and seat grinding ensure airtight seals.
Performance tests confirm restored power and efficiency.`,
    features: [
      "Head machining/replacement",
      "Gasket swap",
      "Pressure test",
      "Valve seat work",
      "Efficiency test",
      "Torque spec validation"
    ],
  },
  {
    title: "Turbocharger Repair/Replacement",
    description: `Regain boost power with Turbocharger Repair or Replacement.
We test boost pressures, disassemble the turbo, and replace damaged components or the complete unit.
Oil line inspections prevent future failures.
Intercooler checks ensure proper charge cooling.
Dyno tests verify restored horsepower.`,
    features: [
      "Boost test",
      "Component swap",
      "Oil line check",
      "Intercooler inspection",
      "Dyno validation",
      "Boost control setup"
    ],
  },
  {
    title: "Emission System Repair",
    description: `Keep your vehicle compliant with Emission System Repairs.
We diagnose and replace faulty sensors, catalytic converters, and exhaust components.
Smoke tests identify hidden leaks.
ECU updates clear P0420/P0430 codes.
Post-repair emission tests ensure passage.`,
    features: [
      "Sensor swap",
      "Converter replacement",
      "Smoke testing",
      "ECU update",
      "Emission retest",
      "Compliance certification"
    ],
  },
  {
    title: "Catalytic Converter Replacement",
    description: `Reduce harmful pollutants with Catalytic Converter Replacement.
We fit OEM-compliant converters and weld custom exhaust connections.
O2 sensor calibrations restore accurate monitoring.
Emission tests confirm lowered NOx and CO levels.
A lifetime warranty covers most converters.`,
    features: [
      "OEM converter",
      "Custom welding",
      "Sensor calibration",
      "Emission check",
      "NOx/CO testing",
      "Lifetime warranty"
    ],
  },
  {
    title: "Radiator Hose Replacement",
    description: `Prevent coolant leaks with Radiator Hose Replacement.
We remove aged hoses, install OEM-grade replacements, and secure with new clamps.
Coolant system is flushed and refilled to remove debris.
Pressure tests confirm a sealed cooling circuit.
Temperature readings ensure proper flow.`,
    features: [
      "Hose swap",
      "Clamp replacement",
      "Coolant flush",
      "Pressure test",
      "Flow check",
      "Temperature monitoring"
    ],
  },
  {
    title: "Serpentine Belt Replacement",
    description: `Maintain accessory drive systems with Serpentine Belt Replacement.
We replace worn belts, inspect tensioners and pulleys, and set proper tension.
Accessory tests confirm alternator, pump, and compressor operation.
Belt alignment checks prevent premature wear.
A final vibration test ensures system harmony.`,
    features: [
      "Belt swap",
      "Tensioner service",
      "Pulley inspection",
      "Accessory testing",
      "Alignment check",
      "Vibration test"
    ],
  },
  {
    title: "AC Compressor Replacement",
    description: `Restore full cooling power with AC Compressor Replacement.
We evacuate and recover old refrigerant, replace the compressor, and recharge system.
Oil levels and pressures are adjusted to factory specs.
Leak checks and performance tests confirm optimal function.
A warranty covers parts and labor.`,
    features: [
      "Evacuation/recharge",
      "Compressor swap",
      "Oil top-up",
      "Pressure testing",
      "Performance check",
      "Warranty coverage"
    ],
  },
  {
    title: "Cooling Fan Replacement",
    description: `Prevent engine overheating with Cooling Fan Replacement.
We test fan motors, relays, and temperature sensors before replacement.
New fans are installed and electrical connections secured.
Thermal tests under idle and load conditions ensure reliability.
All components carry a 1-year warranty.`,
    features: [
      "Motor testing",
      "Relay inspection",
      "Sensor check",
      "Fan swap",
      "Thermal test",
      "1-year warranty"
    ],
  },
  {
    title: "Fuel Pump Replacement",
    description: `Ensure consistent fuel delivery with Fuel Pump Replacement.
We test pump pressure, replace the module, and clean the tank screen.
Fuel lines and filters are inspected and replaced if needed.
Electrical connector integrity is verified.
A flow test confirms correct output under load.`,
    features: [
      "Pressure test",
      "Pump module swap",
      "Tank screen cleaning",
      "Line inspection",
      "Connector check",
      "Flow validation"
    ],
  },
  {
    title: "Thermostat Replacement",
    description: `Regulate engine temperature reliably with Thermostat Replacement.
We remove the old thermostat, install a new unit, and bleed the cooling system.
Temperature sensors and hoses are inspected.
Thermal cycle tests confirm correct opening/closing.
A coolant level check ensures system integrity.`,
    features: [
      "Thermostat swap",
      "Coolant bleed",
      "Sensor/hose check",
      "Thermal cycle test",
      "Pressure check",
      "Flow monitoring"
    ],
  },
  {
    title: "Control Arm Replacement",
    description: `Improve handling and ride comfort with Control Arm Replacement.
We replace control arms and bushings, then realign suspension geometry.
Ball joints and linkages are inspected for play.
A road test evaluates steering precision.
Ride height measurements confirm specs.`,
    features: [
      "Arm/bushing swap",
      "Alignment service",
      "Ball joint check",
      "Linkage inspection",
      "Road test",
      "Ride height check"
    ],
  },
  {
    title: "Timing Chain Replacement",
    description: `Protect engine synchronization with Timing Chain Replacement.
We remove the chain, guides, and tensioners, then install new components.
Alignment to timing marks is verified precisely.
Oil pump operation is confirmed.
Load tests ensure correct cam/crank timing.`,
    features: [
      "Chain/guide swap",
      "Tensioner replacement",
      "Alignment verification",
      "Oil pump check",
      "Load testing",
      "Timing report"
    ],
  },
  {
    title: "Transmission Mount Replacement",
    description: `Eliminate drivetrain vibration with Transmission Mount Replacement.
We swap out worn mounts, inspect surrounding bushings, and torque to spec.
Chassis alignment is checked for lateral movement.
Vibration analysis ensures a smooth ride.
A service report highlights mount condition.`,
    features: [
      "Mount swap",
      "Bushing check",
      "Torque testing",
      "Chassis inspection",
      "Vibration analysis",
      "Condition report"
    ],
  },
];

export default services;
