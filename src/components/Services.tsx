
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Auto Repair Service",   
      description: "Comprehensive auto repair services for all makes and models",
      features: ["Engine diagnostics", "Brake repair", "Transmission service"]
    },
    {
      title: "Oil Change",
      description: "Quick and efficient oil change services to keep your engine healthy",
      features: ["Conventional oil", "Synthetic oil", "Filter replacement"]
    },
    {
      title: "Brake Pads Replacement",
      description: "High-quality brake pad replacement for enhanced safety and performance",
      features: ["OEM parts", "Performance upgrades", "Safety checks"]
    },
    {
      title: "Battery Replacement",
      description: "Professional battery replacement services to keep your vehicle’s electrical system functioning smoothly.",
      features: ["Battery testing", "Installation", "Assessment of electrical system"]
    },
    {
      title: "Transmission Oil Change",
      description: "Essential transmission oil change services to prolong the life of your transmission",
      features: ["Fluid replacement", "Filter change", "System flush"]
    },
    {
      title: "Engine Diagnostics",
      description: "Advanced engine diagnostics to identify and resolve issues quickly",
      features: ["Check engine light", "Performance issues", "Fuel efficiency"]
    },
    {
      title: "AC System Freon Recharge",
      description: "Keep your vehicle cool with our AC system freon recharge service efficiently",
      features: ["Leak detection", "Freon refill", "System inspection"]
    },
    {
      title: "AC System Repair",
      description: "Comprehensive AC system repair services to ensure your comfort on the road",
      features: ["Compressor replacement", "Condenser repair", "System diagnostics"]
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-slate-800 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            Comprehensive Auto Services
          </h2>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, our certified technicians 
            provide expert service for all makes and models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-gray-50">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
