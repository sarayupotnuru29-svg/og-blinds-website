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
//   ];

//   return (
//     <section id="services" className="section-padding bg-muted py-16 md:py-24">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
//             Our Services
//           </h2>
//           <div className="divider-accent mb-6" />
//           <p className="text-secondary max-w-2xl mx-auto text-lg">
//             Premium window solutions tailored to transform your space with style and functionality
//           </p>
//         </div>

//         {/* Highlights Bar */}
//         <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 lg:gap-8 mb-16 py-4 border-y border-foreground/5">
//           {highlights.map((highlight) => (
//             <div
//               key={highlight}
//               className="flex items-center gap-2 text-foreground whitespace-nowrap"
//             >
//               <Check className="w-5 h-5 text-primary flex-shrink-0" />
//               <span className="font-semibold text-sm md:text-base">{highlight}</span>
//             </div>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               className="bg-card rounded overflow-hidden shadow-card card-hover group flex flex-col h-full transition-all duration-300"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Image Container */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               {/* Content */}
//               <div className="p-6 flex-grow">
//                 <h3 className="text-xl font-display font-semibold text-foreground mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
//                   {service.description}
//                 </p>
                
//                 {/* Features */}
//                 <ul className="space-y-2">
//                   {service.features.map((feature) => (
//                     <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
//                       <Check className="w-4 h-4 text-primary flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Decorative Bottom Bar */}
//               <div className="h-1 bg-accent group-hover:bg-[#2F3E46] transition-colors duration-300" />
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <a 
//             href="#get-started" 
//             className="rounded-full px-10 py-4 text-lg font-bold inline-block text-white shadow-lg hover:shadow-xl transition-all hover:brightness-110 active:scale-95"
//             style={{ backgroundColor: "#2F3E46" }}
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
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          {/* UPDATED: Custom underline color to #2F3E46 */}
          <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: '#2F3E46' }} />
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Premium window solutions tailored to transform your space with style and functionality
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 lg:gap-8 mb-16 py-4 border-y border-foreground/5">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-foreground whitespace-nowrap"
            >
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded overflow-hidden shadow-card card-hover group flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
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

              {/* Divider Decor */}
              <div className="h-1 bg-accent group-hover:bg-cta transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          {/* UPDATED: Redirect button background color to #2F3E46 */}
          <a 
            href="#get-started" 
            className="rounded-full px-10 py-4 text-lg font-bold inline-block shadow-lg hover:shadow-xl transition-all text-white"
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