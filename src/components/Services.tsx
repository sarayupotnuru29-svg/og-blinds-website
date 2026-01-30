// import { Check } from "lucide-react";
// import rollerBlinds from "@/assets/Roller_Blinds.jpeg";
// import zebraBlinds from "@/assets/Zebra_blinds.jpeg";
// import motorisedBlinds from "@/assets/Motorised_Smart.jpeg";
// import SmartIntegration from "@/assets/smart_integration.jpeg";
// import installationImg from "@/assets/Free_Measure.jpeg";
// import customBlinds from "@/assets/With_Without_Cassette.jpeg";

// const Services = () => {
//   const services = [
//     {
//       title: "Roller Blinds",
//       description: "Classic elegance meets modern functionality. Our premium roller blinds offer superior light control and privacy with smooth, effortless operation.",
//       image: rollerBlinds,
//       features: ["Light filtering options", "Blockout available", "Easy maintenance"],
//     },
//     {
//       title: "Zebra Blinds",
//       description: "Innovative dual-layer design with alternating sheer and opaque stripes. Adjust light levels precisely while maintaining your view.",
//       image: zebraBlinds,
//       features: ["Dual-layer design", "Modern aesthetic", "Versatile light control"],
//     },
//     {
//       title: "With or Without Cassette",
//       description: "Choose the perfect mounting style for your blinds. Cassette options provide a clean, enclosed look while open roll offers a minimalist appeal.",
//       image: customBlinds,
//       features: ["Enclosed cassette option", "Open roll available", "Clean installation"],
//     },
//     {
//       title: "Motorised & Smart Blinds",
//       description: "Experience the future of window treatments. Control via Alexa, Siri, Google Home & Phone App for ultimate convenience.",
//       image: motorisedBlinds,
//       features: ["Voice control compatible", "Scheduled automation", "Remote app control"],
//     },
//     {
//       title: "Smart Integration",
//       description: "Seamlessly integrate your blinds with your smart home ecosystem. Voice commands and app control for effortless operation.",
//       image: SmartIntegration,
//       features: ["Alexa & Google Home", "Siri compatible", "Smartphone app control"],
//     },
//     {
//       title: "Free Measure & Quote",
//       description: "Our expert team provides complimentary on-site measurements and professional installation to ensure perfect fit every time.",
//       image: installationImg,
//       features: ["Professional Installation", "Expert consultation", "No obligation quote"],
//     },
//   ];

//   const highlights = [
//     "Premium Quality",
//     "Motorised & Smart",
//     "Expert Installation",
//     "Custom Options",
//     "Modern Aesthetic",
//     "Custom Print Blinds",
//   ];

//   return (
//     <section id="services" className="section-padding bg-muted">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
//             Our Services
//           </h2>
//           <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: '#2F3E46' }} />
//           <p className="text-secondary max-w-2xl mx-auto text-lg">
//             Premium window solutions tailored to transform your space with style and functionality
//           </p>
//         </div>

//         {/* Highlights Bar - UPDATED: Two rows (3 columns) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 max-w-4xl mx-auto mb-16 py-8 border-y border-foreground/5">
//           {highlights.map((highlight) => (
//             <div
//               key={highlight}
//               className="flex items-center justify-center md:justify-start gap-3 text-foreground"
//             >
//               <div className="bg-[#2F3E46]/10 p-1 rounded-full">
//                 <Check className="w-4 h-4 text-[#2F3E46] flex-shrink-0" />
//               </div>
//               <span className="font-semibold text-sm md:text-base tracking-tight">{highlight}</span>
//             </div>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               className="bg-card rounded overflow-hidden shadow-card card-hover group flex flex-col h-full"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               <div className="p-6 flex-grow">
//                 <h3 className="text-xl font-display font-semibold text-foreground mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
//                   {service.description}
//                 </p>
                
//                 <ul className="space-y-2">
//                   {service.features.map((feature) => (
//                     <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
//                       <Check className="w-4 h-4 text-[#2F3E46] flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="h-1 bg-accent group-hover:bg-cta transition-colors duration-300" />
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <a 
//             href="#get-started" 
//             className="rounded-full px-10 py-4 text-lg font-bold inline-block shadow-lg hover:shadow-xl transition-all text-white active:scale-95"
//             style={{ backgroundColor: '#2F3E46' }}
//           >
//             Get Started Today
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import { Check } from "lucide-react";
import rollerBlinds from "@/assets/Roller_Blinds.jpeg";
import zebraBlinds from "@/assets/Zebra_blinds.jpeg";
import motorisedBlinds from "@/assets/Motorised_Smart.jpeg";
import SmartIntegration from "@/assets/smart_integration.jpeg";
import installationImg from "@/assets/Free_Measure.jpeg";
import customBlinds from "@/assets/With_Without_Cassette.jpeg";

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
      features: ["Dual-layer design", "Modern aesthetic", "Versatile light control"],
    },
    {
      title: "With or Without Cassette",
      description: "Choose the perfect mounting style for your blinds. Cassette options provide a clean, enclosed look while open roll offers a minimalist appeal.",
      image: customBlinds,
      features: ["Enclosed cassette option", "Open roll available", "Clean installation"],
    },
    {
      title: "Motorised & Smart Blinds",
      description: "Experience the future of window treatments. Control via Alexa, Siri, Google Home & Phone App for ultimate convenience.",
      image: motorisedBlinds,
      features: ["Voice control compatible", "Scheduled automation", "Remote app control"],
    },
    {
      title: "Smart Integration",
      description: "Seamlessly integrate your blinds with your smart home ecosystem. Voice commands and app control for effortless operation.",
      image: SmartIntegration,
      features: ["Alexa & Google Home", "Siri compatible", "Smartphone app control"],
    },
    {
      title: "Free Measure & Quote",
      description: "Our expert team provides complimentary on-site measurements and professional installation to ensure perfect fit every time.",
      image: installationImg,
      features: ["Professional Installation", "Expert consultation", "No obligation quote"],
    },
  ];

  const highlights = [
    "Premium Quality",
    "Motorised & Smart",
    "Expert Installation",
    "Custom Options",
    "Modern Aesthetic",
    "Custom Print Blinds",
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: '#2F3E46' }} />
          <p className="text-secondary max-w-2xl mx-auto text-lg px-4">
            Premium window solutions tailored to transform your space with style and functionality
          </p>
        </div>

        {/* Highlights Bar - UPDATED for perfect mobile alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-4xl mx-auto mb-16 py-8 border-y border-foreground/5">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center justify-start sm:justify-center md:justify-start gap-3 text-foreground px-8 sm:px-0"
            >
              <div className="bg-[#2F3E46]/10 p-1 rounded-full flex-shrink-0">
                <Check className="w-4 h-4 text-[#2F3E46]" />
              </div>
              <span className="font-semibold text-base tracking-tight whitespace-nowrap">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Services Grid - Fixed alignment for mobile and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <Check className="w-4 h-4 text-[#2F3E46] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-1.5 bg-[#2F3E46]/10 group-hover:bg-[#2F3E46] transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#get-started" 
            className="rounded-full px-12 py-4 text-lg font-bold inline-block shadow-lg hover:shadow-2xl transition-all text-white active:scale-95 hover:-translate-y-1"
            style={{ backgroundColor: '#2F3E46' }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;