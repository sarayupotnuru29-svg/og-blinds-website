import { Check } from "lucide-react";
import rollerBlinds from "@/assets/roller-blinds.jpg";
import zebraBlinds from "@/assets/zebra-blinds.jpg";
import motorisedBlinds from "@/assets/motorised-blinds.jpg";
import installationImg from "@/assets/installation.jpg";
import customBlinds from "@/assets/custom-blinds.jpg";

const Services = () => {
  const services = [
    {
      title: "Roller Blinds",
      description: "Classic elegance meets modern functionality. Our premium roller blinds offer superior light control and privacy with smooth, effortless operation.",
      image: rollerBlinds,
      features: ["Light filtering options", "Blockout available", "Easy maintenance"],
    },
    {
      title: "Zebra Blinds",
      description: "Innovative dual-layer design with alternating sheer and opaque stripes. Adjust light levels precisely while maintaining your view.",
      image: zebraBlinds,
      features: ["With or Without Cassette", "Modern aesthetic", "Versatile light control"],
    },
    {
      title: "Motorised & Smart Blinds",
      description: "Experience the future of window treatments. Control via Alexa, Siri, Google Home & Phone App for ultimate convenience.",
      image: motorisedBlinds,
      features: ["Voice control compatible", "Scheduled automation", "Remote app control"],
    },
    {
      title: "Free Measure & Quote",
      description: "Our expert team provides complimentary on-site measurements and professional installation to ensure perfect fit every time.",
      image: installationImg,
      features: ["Professional Installation", "Expert consultation", "No obligation quote"],
    },
    {
      title: "Custom Options",
      description: "Tailored solutions designed specifically for your space. Choose from a wide range of fabrics, colors, and styles.",
      image: customBlinds,
      features: ["Bespoke designs", "Premium fabrics", "Perfect fit guarantee"],
    },
  ];

  const highlights = [
    "Premium Quality",
    "Motorised & Smart",
    "Expert Installation",
    "Custom Options",
    "Modern Aesthetic",
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="divider-accent mb-6" />
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Premium window solutions tailored to transform your space with style and functionality
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 px-4">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-foreground"
            >
              <Check className="w-5 h-5 text-primary" />
              <span className="font-medium">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded overflow-hidden shadow-card card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover image-float group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-1 bg-accent group-hover:bg-cta transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#get-started" className="btn-cta rounded px-10 py-4 text-lg inline-block">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
