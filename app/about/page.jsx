"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">About HezTech</p>

          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>
        <div>
          HezTech is a dedicated electronics components supplier specializing in
          high-quality parts for embedded systems and hardware development. We
          provide a wide range of essential components, including
          microcontrollers, sensors, displays, motor drivers, power supplies,
          and many other embedded electronics essentials. At HezTech, our
          mission is to support engineers, students, hobbyists, and makers with
          reliable components, fair pricing, and excellent customer service.
          Whether you're building prototypes, learning electronics, or
          developing full-scale products, HezTech is your trusted partner for
          all your component needs.
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default About;
