
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Dallas's Most
                <span className="text-blue-400 block">Trusted Auto Repair</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience honest, quality automotive service with speed that fits your schedule. 
                Specializing in luxury vehicles with premium amenities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-lg">Certified mechanics for all luxury brands</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-lg">Complimentary Wi-Fi & loaner cars</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-lg">Transparent pricing & warranties</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Schedule Service
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                Get Free Quote
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">500+</span> Happy Customers
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486148275818-6c90c9a8fb9d?q=80&w=800&auto=format&fit=crop"
                alt="Professional auto repair shop" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
