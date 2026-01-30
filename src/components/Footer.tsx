import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Get Started", href: "#get-started" },
  ];

  const services = [
    "Roller Blinds",
    "Zebra Blinds",
    "Custom Print Blinds", // Added as requested
    "Motorised Blinds",
    "Smart Blinds",
    "Custom Solutions",
  ];

  // Social configuration including WhatsApp, Facebook, and Instagram
  const socialLinks = [
    { 
      label: "WhatsApp", 
      href: "https://wa.me/61403956504",
      icon: MessageCircle 
    },
    { 
      label: "Facebook", 
      href: "https://www.facebook.com/share/17vYCM3gYN/?mibextid=wwXIfr",
      icon: Facebook 
    },
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/ogblinds?igsh=dzQ3bGV4eWxoY2dt",
      icon: Instagram 
    },
  ];

  return (
    <footer style={{ backgroundColor: '#2F3E46' }} className="text-[#F4F7F6]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4 group">
              <span className="text-3xl font-display font-bold text-[#84A59D] mr-2">
                OG
              </span>
              <span className="text-3xl font-display font-light text-[#F4F7F6]">
                BLINDS
              </span>
            </a>
            <p className="text-[#F4F7F6]/70 text-sm leading-relaxed mb-6 font-display">
              Premium Blinds & Smart Window Solutions. Transform your home with stylish, 
              motorised blinds controlled via Alexa, Siri, Google Home & Phone App.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F4F7F6]/10 rounded flex items-center justify-center text-[#F4F7F6] hover:bg-[#84A59D] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold mb-6 uppercase tracking-widest text-[#F4F7F6]/90 border-b border-[#84A59D]/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[#F4F7F6]/60 hover:text-[#84A59D] transition-colors text-sm font-display font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-display font-bold mb-6 uppercase tracking-widest text-[#F4F7F6]/90 border-b border-[#84A59D]/30 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-[#F4F7F6]/60 hover:text-[#84A59D] transition-colors text-sm font-display font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-bold mb-6 uppercase tracking-widest text-[#F4F7F6]/90 border-b border-[#84A59D]/30 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#F4F7F6]/70 text-sm font-display font-medium">
                <Phone className="w-4 h-4 text-[#84A59D]" />
                <a href="tel:+61403956504" className="hover:text-[#84A59D] transition-colors">+61 403 956 504</a>
              </li>
              <li className="flex items-center gap-3 text-[#F4F7F6]/70 text-sm font-display font-medium">
                <Mail className="w-4 h-4 text-[#84A59D]" />
                <a href="mailto:info@ogblinds.com.au" className="hover:text-[#84A59D] transition-colors">info@ogblinds.com.au</a>
              </li>
              <li className="flex items-start gap-3 text-[#F4F7F6]/70 text-sm font-display font-medium">
                <MapPin className="w-4 h-4 text-[#84A59D] mt-0.5" />
                <span>Services across all Melbourne</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F4F7F6]/10">
        <div className="container mx-auto px-4 py-6 text-center md:text-left">
          <p className="text-xs text-[#F4F7F6]/30 font-display font-medium tracking-widest">
            © {currentYear} OG BLINDS. ALL RIGHTS RESERVED. | MELBOURNE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;