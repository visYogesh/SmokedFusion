import React, { memo } from "react";
import services from "./BlogServices"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowUp } from "lucide-react";

// Memoized card to prevent unnecessary re-renders
const ServiceDetailCard = memo(({ service, idx }: { service: any; idx: number }) => (
  <div id={`blog${idx + 1}`} className="service-card">
    <Card className="shadow-lg rounded-2xl transition-transform hover:scale-[1.02]">
      <CardHeader className="bg-purple-700 text-white rounded-t-2xl p-4">
        <CardTitle className="text-2xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4 rounded-b-2xl bg-gray-300">
        <p className="text-gray-700">{service.description}</p>

        <Accordion type="single" collapsible>
          <AccordionItem value={`features-${idx}`}>
            <AccordionTrigger className="font-medium">
              Key Features
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {service.features.map((feat: string, i: number) => (
                  <li key={i} className="text-gray-600">
                    {feat}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-end">
          <Button variant="outline" size="sm" asChild className="bg-black text-white hover:bg-gray-800">
            <a href="#services" className="flex items-center space-x-2">
              <ArrowUp size={16} className="text-white"/>
              <span className="text-white">Back to Services</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
));
ServiceDetailCard.displayName = "ServiceDetailCard";

const Blogs: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'rgb(26, 37, 63)' }} id="blogs" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Service Details</h2>
          <p className="text-lg text-cyan-600 max-w-2xl mx-auto">
            Dive into full breakdowns of each service, from detailed descriptions to step-by-step features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <ServiceDetailCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
