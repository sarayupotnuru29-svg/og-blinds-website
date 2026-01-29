// import { ChevronDown, Check } from "lucide-react";
// import heroBlinds from "@/assets/hero-blinds.jpg";
// import ogLogo from "@/assets/OG_logo.png";

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
//       {/* Background Image with Deep Slate Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBlinds}
//           alt="Premium window blinds in modern living room"
//           className="w-full h-full object-cover"
//         />
//         {/* Swapped Cloud for Deep Slate (#2F3E46) for a moody, premium feel */}
//         <div 
//           className="absolute inset-0 opacity-90" 
//           style={{ backgroundColor: '#2F3E46' }} 
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//         {/* Logo and Highlighted Title */}
//         <div className="mb-6 animate-fade-in">
//           {/* FIXED: Removed brightness-0 invert which caused the white square */}
//           <img
//             src={ogLogo}
//             alt="OG Blinds Logo"
//             className="w-32 md:w-40 lg:w-48 mx-auto mb-3 object-contain"
//             onError={(e) => {
//               e.target.style.display = 'none'; // Hides the broken image icon if path is wrong
//               console.error("Logo failed to load. Verify path: src/assets/OG_logo.png");
//             }}
//           />
//           <h1 className="inline-block">
//             {/* "OG" in Dusk Blue (#84A59D) */}
//             <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#84A59D]">
//               OG
//             </span>
//             {/* "BLINDS" in Cloud (#F4F7F6) */}
//             <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#F4F7F6] tracking-tight ml-3">
//               BLINDS
//             </span>
//           </h1>
//         </div>

//         {/* Tagline */}
//         <p className="text-lg md:text-xl lg:text-2xl text-[#F4F7F6] font-display mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//           Premium Blinds & Smart Window Solutions
//         </p>

//         {/* Subtitle */}
//         <p className="text-sm md:text-base text-[#F4F7F6]/70 max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
//           Transform your home with stylish, smart blinds controlled via Alexa, Siri, Google Home & Phone App
//         </p>

//         {/* Feature List */}
//         <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
//           {features.map((feature) => (
//             <div
//               key={feature}
//               className="flex items-center gap-1.5 text-[#F4F7F6] text-xs md:text-sm font-medium"
//             >
//               {/* Checkmark in Dusk Blue */}
//               <Check className="w-4 h-4 text-[#84A59D]" />
//               <span>{feature}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
//           {/* Explore Services - Dusk Blue Button */}
//           <a
//             href="#services"
//             className="rounded px-8 py-3 text-base font-bold min-w-[180px] shadow-lg transition-all active:scale-95 bg-[#84A59D] text-white hover:bg-[#84A59D]/80"
//           >
//             Explore Services
//           </a>
//           {/* Get Started - Cloud Outline */}
//           <a
//             href="#get-started"
//             className="rounded border-2 border-[#F4F7F6] px-8 py-3 text-base font-bold min-w-[180px] text-[#F4F7F6] bg-transparent hover:bg-[#F4F7F6] hover:text-[#2F3E46] transition-all"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
//         <a
//           href="#services"
//           className="flex flex-col items-center text-[#F4F7F6]/40 hover:text-[#84A59D] transition-colors"
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
import ogLogo from "@/assets/OG_logo.png";

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
      {/* Background Image with Deep Slate Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBlinds}
          alt="Premium window blinds in modern living room"
          className="w-full h-full object-cover"
        />
        {/* Swapped opacity to allow the background image to breathe while maintaining the Deep Slate tint */}
        <div 
          className="absolute inset-0 opacity-80" 
          style={{ backgroundColor: '#2F3E46' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo and Highlighted Title */}
        <div className="mb-6 animate-fade-in">
          <img
            src={ogLogo}
            alt="OG Blinds Logo"
            className="w-32 md:w-40 lg:w-48 mx-auto mb-3 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              console.error("Logo failed to load. Verify path: src/assets/OG_logo.png");
            }}
          />
          <h1 className="inline-block">
            {/* UPDATED: "OG" now white for better contrast on the dark background */}
            <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
              OG
            </span>
            {/* "BLINDS" in Cloud (#F4F7F6) */}
            <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#F4F7F6] tracking-tight ml-3">
              BLINDS
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-[#F4F7F6] font-display mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Premium Blinds & Smart Window Solutions
        </p>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#F4F7F6]/70 max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Transform your home with stylish, smart blinds controlled via Alexa, Siri, Google Home & Phone App
        </p>

        {/* Feature List */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-1.5 text-[#F4F7F6] text-xs md:text-sm font-medium"
            >
              {/* Checkmark updated to match your new primary color #2F3E46 (using a lighter tint for visibility) */}
              <Check className="w-4 h-4 text-white" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {/* Explore Services - Now matches Deep Slate theme */}
          <a
            href="#services"
            className="rounded px-8 py-3 text-base font-bold min-w-[180px] shadow-lg transition-all active:scale-95 text-white border border-white/20"
            style={{ backgroundColor: '#2F3E46' }}
          >
            Explore Services
          </a>
          {/* Get Started - Cloud Outline matches the Header style */}
          <a
            href="#get-started"
            className="rounded border-2 border-[#F4F7F6] px-8 py-3 text-base font-bold min-w-[180px] text-[#F4F7F6] bg-transparent hover:bg-[#F4F7F6] hover:text-[#2F3E46] transition-all"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#services"
          className="flex flex-col items-center text-[#F4F7F6]/40 hover:text-white transition-colors"
        >
          <span className="text-xs mb-1">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;