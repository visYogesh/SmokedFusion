
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white">
      {/* Top bar with contact info */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(214) 555-0123</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Dallas, TX</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri 7AM-6PM | Sat 8AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">CE</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">CarNation Elite</h1>
              <p className="text-sm text-gray-300">Premium Auto Repair</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
