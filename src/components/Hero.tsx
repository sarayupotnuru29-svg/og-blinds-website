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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBlinds}
          alt="Premium window blinds in modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-lime opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img
            src={ogLogo}
            alt="OG Blinds Logo"
            className="w-48 md:w-64 lg:w-80 mx-auto mb-4"
          />
          <h1 className="inline-block">
            <span className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground tracking-tight">
              OG
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-primary-foreground tracking-tight ml-4">
              BLINDS
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-display mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Premium Blinds & Smart Window Solutions
        </p>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Transform your home with stylish, smart blinds controlled via Alexa, Siri, Google Home & Phone App
        </p>

        {/* Feature List */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base"
            >
              <Check className="w-5 h-5 text-cta" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="#services"
            className="btn-cta rounded px-8 py-4 text-lg font-semibold min-w-[200px]"
          >
            Explore Our Services
          </a>
          <a
            href="#get-started"
            className="btn-primary rounded border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold min-w-[200px] text-primary-foreground bg-transparent"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#services"
          className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
