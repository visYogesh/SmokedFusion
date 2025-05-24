
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit CarNation Elite for all your automotive needs. We're here to serve you 
            with the highest quality service and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Phone */}
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300 text-lg">(214) 555-0123</p>
            <p className="text-sm text-gray-400 mt-2">Call or text anytime</p>
          </div>

          {/* Location */}
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-300">
              1234 Auto Repair Lane<br />
              Dallas, TX 75201
            </p>
          </div>

          {/* Hours */}
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <div className="text-gray-300 space-y-1">
              <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">info@carnationelite.com</p>
            <p className="text-sm text-gray-400 mt-2">We'll respond within 24 hours</p>
          </div>
        </div>

        {/* Emergency Service */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 p-8 rounded-lg inline-block">
            <h4 className="font-bold text-2xl mb-4">24/7 Emergency Service</h4>
            <p className="text-blue-100 mb-4 text-lg">
              Need immediate assistance? We offer round-the-clock emergency towing 
              and roadside assistance for our customers.
            </p>
            <p className="text-xl font-bold">(214) 555-HELP (4357)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
