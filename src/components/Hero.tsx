import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const cardImages = [
  "/images/car1.jpg",
  "/images/car3.jpg",
  "/images/car2.jpg",
  // "/images/car4.jpg",
];


const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Dallas's Most
                <span className="text-blue-400 block">Trusted Auto Repair</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience honest, quality automotive service with speed that
                fits your schedule. Specializing in luxury vehicles with premium
                amenities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-lg">
                  Certified Mechanics for all luxury brands 🔧🚗
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-lg">Complimentary Wi-Fi 🚀🛜</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-lg">
                  Transparent Pricing & Complimentary Refreshments ☕🍪
                </span>
              </div>
            </div>

            <div className="bg-[#1e293b] text-white rounded-xl p-6 mt-6 shadow-lg border border-blue-500/10 hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-in-out">
              <p className="text-lg leading-relaxed">
                “At{" "}
                <span className="text-blue-400 font-semibold">
                  CarNation Elite
                </span>
                , Dallas, our aim is to deliver top-quality auto repair with{" "}
                <span className="font-semibold text-white/90">precision</span>,
                <span className="font-semibold text-white/90">honesty</span>,
                and
                <span className="font-semibold text-white/90">
                  elite customer care
                </span>
                —keeping Dallas driving with confidence.”
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">500+</span> Happy
                Customers
              </div>
            </div>
          </div>

          {/* ────────── RIGHT “CAR CARDS” FAN ────────── */}
          <div className="relative flex justify-center items-center py-8">
            <div className="flex items-center justify-center space-x-[-100px]">
              {cardImages.map((src, i) => {
                const rotations = ["-8deg", "-2deg", "4deg", "10deg"];
                return (
                  <div
                    key={i}
                    className="relative hover:z-20 transition-transform duration-300"
                    style={{
                      transform: `rotate(${rotations[i]})`,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Car ${i + 1}`}
                      className="w-60 h-96 object-cover rounded-xl shadow-2xl border-2 border-pink-800 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
