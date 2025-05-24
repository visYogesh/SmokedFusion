
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Luxury Vehicle Service",
      description: "Specialized care for BMW, Mercedes, Audi, Lexus, and other premium brands",
      features: ["Factory-trained technicians", "OEM parts", "Advanced diagnostics"]
    },
    {
      title: "Engine Diagnostics & Repair",
      description: "State-of-the-art diagnostic equipment to quickly identify and resolve issues",
      features: ["Computer diagnostics", "Engine rebuilds", "Performance tuning"]
    },
    {
      title: "Brake Service",
      description: "Complete brake system inspection, repair, and replacement services",
      features: ["Brake pad replacement", "Rotor resurfacing", "Fluid changes"]
    },
    {
      title: "Transmission Service",
      description: "Expert transmission repair and maintenance for all vehicle types",
      features: ["Fluid changes", "Transmission rebuilds", "Clutch repair"]
    },
    {
      title: "Preventive Maintenance",
      description: "Keep your vehicle running smoothly with regular maintenance schedules",
      features: ["Oil changes", "Tune-ups", "Multi-point inspections"]
    },
    {
      title: "Electrical Systems",
      description: "Modern vehicle electrical system diagnosis and repair services",
      features: ["Battery testing", "Alternator repair", "Wiring diagnostics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Auto Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, our certified technicians 
            provide expert service for all makes and models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
