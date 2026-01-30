import { ChevronDown, Check } from "lucide-react";
import heroBlinds from "@/assets/home.jpg";
import ogLogo from "@/assets/replacelogo.jpeg";

const Hero = () => {
  const features = [
    "Roller Blinds",
    "Zebra Blinds",
    "Motorised & Smart Blinds",
    "Custom Print Blinds",
    "Free Measure & Quote",
  ];

  // Logic to force the color priority
  const forcedSlate = {
    "--forced-color": "#2F3E46",
    backgroundColor: "var(--forced-color)",
  } as React.CSSProperties;

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
        <div
          className="absolute inset-0 opacity-80"
          style={forcedSlate} // FORCED: Overlay color
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo and Highlighted Title */}
        <div className="mb-6 animate-fade-in">
          <img
            src={ogLogo}
            alt="OG Blinds Logo"
            className="w-full h-[400px] lg:h-[600px] object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
      
        </div>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-[#F4F7F6] font-display mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          
        </p>

        {/* Subtitle - Brightened text */}
        <p
          className="text-sm md:text-base text-[#F4F7F6] max-w-xl mx-auto mb-8 animate-fade-in font-medium"
          style={{ animationDelay: "0.4s" }}
        >
          Transform your home with stylish, smart blinds controlled via Alexa,
          Siri, Google Home & Phone App
        </p>

        {/* Feature List */}
        <div
          className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-1.5 text-[#F4F7F6] text-xs md:text-sm font-medium"
            >
              <Check className="w-4 h-4 text-white" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {/* Explore Services - FORCED SLATE COLOR */}
          <a
            href="#services"
            className="rounded px-8 py-3 text-base font-bold min-w-[180px] shadow-lg transition-all active:scale-95 text-white border border-white/10"
            style={forcedSlate}
          >
            Explore Services
          </a>

          <a
            href="#get-started"
            className="rounded border-2 border-[#F4F7F6] px-8 py-3 text-base font-bold min-w-[180px] text-[#F4F7F6] bg-transparent hover:bg-[#F4F7F6] hover:text-[#2F3E46] transition-all"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll Indicator - FIXED: Exact Center Alignment */}
      <div className="absolute bottom-6 w-full flex justify-center animate-float z-20">
        <a
          href="#services"
          className="flex flex-col items-center justify-center text-[#F4F7F6]/40 hover:text-white transition-colors"
        >
          <span className="text-[10px] md:text-xs mb-1 uppercase tracking-widest font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;