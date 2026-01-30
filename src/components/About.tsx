import { Award, Shield, Wrench, Heart } from "lucide-react";
import about from "@/assets/main.jpeg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest materials for lasting durability and timeless elegance.",
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Our skilled technicians ensure precise fitting for a flawless finish every time.",
    },
    {
      icon: Shield,
      title: "Smart Solutions",
      description: "Cutting-edge motorised systems compatible with your smart home ecosystem.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your complete satisfaction is our priority, from consultation to installation.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={about}
                alt="Premium zebra blinds in modern interior"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Decorative Elements - Updated to match theme */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2F3E46]/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#84A59D]/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#2F3E46] mb-4">
              About OG Blinds
            </h2>
            
            {/* UPDATED: Underline set to #2F3E46 */}
            <div 
              className="h-1.5 w-20 mb-6 rounded-full" 
              style={{ backgroundColor: '#2F3E46' }} 
            />
            
            <p className="text-[#2F3E46]/80 text-lg leading-relaxed mb-6">
              At OG Blinds, we bring together craftsmanship, innovation, and style to transform 
              your windows into stunning focal points. With years of expertise in premium window 
              treatments, we're committed to delivering exceptional quality and service.
            </p>
            
            <p className="text-[#2F3E46]/80 text-lg leading-relaxed mb-6">
              From elegant roller blinds to smart motorised solutions, we offer 
              custom-designed window treatments that perfectly complement your interior. Our 
              professional team handles everything from precise measurements to flawless 
              installation, ensuring you complete satisfaction.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#84A59D]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2F3E46] transition-all duration-300">
                    <value.icon className="w-6 h-6 text-[#2F3E46] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2F3E46] mb-1">{value.title}</h4>
                    <p className="text-sm text-[#2F3E46]/60 leading-snug">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;