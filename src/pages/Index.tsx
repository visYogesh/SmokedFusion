
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SalesRentals from "@/components/SalesRentals";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <SalesRentals />
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
