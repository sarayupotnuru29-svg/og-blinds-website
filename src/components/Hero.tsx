// import { ChevronDown, Check } from "lucide-react";
// import heroBlinds from "@/assets/hero-blinds.jpg";
// import ogLogo from "@/assets/og-blinds-logo.png";

// const Hero = () => {
//   const features = [
//     "Roller Blinds",
//     "Zebra Blinds",
//     "Motorised & Smart Blinds",
//     "Free Measure & Quote",
//   ];

//   return (
//     <section
//       id="home"
//       className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image with New #E1D0B3 Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBlinds}
//           alt="Premium window blinds in modern living room"
//           className="w-full h-full object-cover"
//         />
//         {/* Replaced gradient-hero-lime with the specific hex color provided */}
//         <div 
//           className="absolute inset-0 opacity-90" 
//           style={{ backgroundColor: '#E1D0B3' }} 
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//         {/* Logo and Highlighted Title */}
//         <div className="mb-6 animate-fade-in">
//           <img
//             src={ogLogo}
//             alt="OG Blinds Logo"
//             className="w-32 md:w-40 lg:w-48 mx-auto mb-3"
//           />
//           <h1 className="inline-block">
//             {/* "OG" Highlighted in CTA color (Yellow/Gold) */}
//             <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-cta tracking-tight">
//               OG
//             </span>
//             {/* Switched "BLINDS" to Dark for better contrast on the light beige background */}
//             <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight ml-3">
//               BLINDS
//             </span>
//           </h1>
//         </div>

//         {/* Tagline - Switched to Dark text */}
//         <p className="text-lg md:text-xl lg:text-2xl text-slate-800 font-display mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//           Premium Blinds & Smart Window Solutions
//         </p>

//         {/* Subtitle - Switched to Slate Gray for readability */}
//         <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
//           Transform your home with stylish, smart blinds controlled via Alexa, Siri, Google Home & Phone App
//         </p>

//         {/* Feature List - Darker text for visibility */}
//         <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
//           {features.map((feature) => (
//             <div
//               key={feature}
//               className="flex items-center gap-1.5 text-slate-800 text-xs md:text-sm font-medium"
//             >
//               <Check className="w-4 h-4 text-cta" />
//               <span>{feature}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
//           <a
//             href="#services"
//             className="btn-cta rounded px-6 py-3 text-base font-semibold min-w-[180px] shadow-sm"
//           >
//             Explore Services
//           </a>
//           <a
//             href="#get-started"
//             className="rounded border-2 border-slate-900/20 hover:bg-slate-900/5 px-6 py-3 text-base font-semibold min-w-[180px] text-slate-900 bg-transparent transition-all"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>

//       {/* Scroll Indicator - Darkened to match */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
//         <a
//           href="#services"
//           className="flex flex-col items-center text-slate-500 hover:text-slate-900 transition-colors"
//         >
//           <span className="text-xs mb-1">Scroll Down</span>
//           <ChevronDown className="w-5 h-5" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { ChevronDown, Check } from "lucide-react";
import heroBlinds from "@/assets/hero-blinds.jpg";
import ogLogo from "@/assets/og-blinds-logo.png";

const Hero = () => {
  const features = [
    "Roller Blinds",
    "Zebra Blinds",
    "Motorised & Smart Blinds",
    "Free Measure & Quote",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with New #E7CCCC Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBlinds}
          alt="Premium window blinds in modern living room"
          className="w-full h-full object-cover"
        />
        {/* Replaced old beige with your requested Dusty Rose (#E7CCCC) */}
        <div 
          className="absolute inset-0 opacity-90" 
          style={{ backgroundColor: '#E7CCCC' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo and Highlighted Title */}
        <div className="mb-6 animate-fade-in">
          <img
            src={ogLogo}
            alt="OG Blinds Logo"
            className="w-32 md:w-40 lg:w-48 mx-auto mb-3"
          />
          <h1 className="inline-block">
            {/* "OG" Highlighted in Brand Yellow (#F3B111) */}
            <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F3B111]">
              OG
            </span>
            {/* "BLINDS" in Navy/Slate for contrast against the pinkish background */}
            <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#1A2238] tracking-tight ml-3">
              BLINDS
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-[#1A2238] font-display mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Premium Blinds & Smart Window Solutions
        </p>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-slate-700 max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Transform your home with stylish, smart blinds controlled via Alexa, Siri, Google Home & Phone App
        </p>

        {/* Feature List */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-1.5 text-[#1A2238] text-xs md:text-sm font-medium"
            >
              {/* Checkmark in Brand Yellow */}
              <Check className="w-4 h-4 text-[#F3B111]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {/* Explore Services - Yellow Button */}
          <a
            href="#services"
            className="rounded px-8 py-3 text-base font-bold min-w-[180px] shadow-md transition-all active:scale-95 bg-[#F3B111] text-black hover:bg-[#d99d0f]"
          >
            Explore Services
          </a>
          {/* Get Started - Outline Button */}
          <a
            href="#get-started"
            className="rounded border-2 border-[#1A2238] px-8 py-3 text-base font-bold min-w-[180px] text-[#1A2238] bg-transparent hover:bg-[#1A2238]/5 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#services"
          className="flex flex-col items-center text-slate-600 hover:text-[#1A2238] transition-colors"
        >
          <span className="text-xs mb-1">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;