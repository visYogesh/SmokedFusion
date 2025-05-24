
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Clock, number: "24hr", label: "Quick Turnaround" },
    { icon: Shield, number: "100%", label: "Satisfaction Guaranteed" }
  ];

  const team = [
    {
      name: "Mike Rodriguez",
      title: "Master Technician & Owner",
      experience: "15+ years",
      specialty: "Luxury European vehicles"
    },
    {
      name: "Sarah Chen",
      title: "Lead Diagnostic Specialist",
      experience: "12+ years",
      specialty: "Engine diagnostics & electrical"
    },
    {
      name: "David Thompson",
      title: "Transmission Expert",
      experience: "10+ years",
      specialty: "Manual & automatic transmissions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose CarNation Elite?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded on the principles of honesty, quality, and speed, CarNation Elite has become 
                Dallas's premier destination for automotive excellence. We understand that your vehicle 
                is more than transportation—it's your freedom, your investment, and your peace of mind.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our state-of-the-art facility combines cutting-edge diagnostic technology with 
                old-school customer service values. Every repair comes with our guarantee of quality 
                and transparency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1559808888-57a1f877668e?q=80&w=800&auto=format&fit=crop"
              alt="Modern auto repair facility" 
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Meet Our Expert Team
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-700">Specializes in {member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
