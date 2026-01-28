import { Award, Shield, Wrench, Heart } from "lucide-react";
import about from "@/assets/newabout.jpg";

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
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded shadow-xl">
              <img
                src={about}
                alt="Premium zebra blinds in modern interior"
                className="w-full h-[400px] lg:h-[500px] object-cover image-float"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              About OG Blinds
            </h2>
            <div className="divider-accent mb-6 mx-0" style={{ marginLeft: 0 }} />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At OG Blinds, we bring together craftsmanship, innovation, and style to transform 
              your windows into stunning focal points. With years of expertise in premium window 
              treatments, we're committed to delivering exceptional quality and service.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              From elegant roller blinds to cutting-edge smart motorised solutions, we offer 
              custom-designed window treatments that perfectly complement your interior. Our 
              professional team handles everything from precise measurements to flawless 
              installation, ensuring your complete satisfaction.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
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
