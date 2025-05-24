
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      vehicle: "2020 BMW X5",
      rating: 5,
      text: "Outstanding service! My BMW needed complex electrical work, and the team at CarNation Elite diagnosed and fixed the issue quickly. The loaner car was a lifesaver, and their communication throughout the process was excellent.",
      date: "2 weeks ago"
    },
    {
      name: "Robert Johnson",
      vehicle: "2019 Mercedes C-Class",
      rating: 5,
      text: "I've been taking my Mercedes here for 3 years now. Mike and his team are honest, professional, and their work is top-notch. They always explain what needs to be done and why. Highly recommend!",
      date: "1 month ago"
    },
    {
      name: "Lisa Thompson",
      vehicle: "2021 Audi Q7",
      rating: 5,
      text: "Finally found a shop I can trust! They could have easily oversold me on unnecessary services, but instead they prioritized what actually needed attention. The complimentary Wi-Fi made waiting comfortable too.",
      date: "3 weeks ago"
    },
    {
      name: "Michael Davis",
      vehicle: "2018 Lexus ES",
      rating: 5,
      text: "CarNation Elite saved me thousands compared to the dealership quote. Their expertise with luxury vehicles is evident, and they use quality parts. The warranty on their work gives me peace of mind.",
      date: "1 week ago"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Dallas drivers are saying 
            about their experience with CarNation Elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-600" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.vehicle}</p>
                    </div>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-900">4.9/5</div>
              <div className="text-sm text-gray-600">500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
