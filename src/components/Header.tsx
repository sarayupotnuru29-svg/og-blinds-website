// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import logoImg from "../assets/OG_logo.png"; 

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Services", href: "#services" },
//     { name: "About", href: "#about" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
//       }`}
//       style={{ backgroundColor: isScrolled ? '#2F3E46' : 'transparent' }}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo and Brand */}
//         <a href="#home" className="flex items-center gap-2 group">
//           <div className="bg-white p-1 rounded-sm flex items-center justify-center">
//             <img 
//               src={logoImg} 
//               alt="OG Blinds Logo" 
//               className="w-10 h-10 object-contain"
//               /* If you want to remove the white background from the image itself 
//                  while keeping the logo colors, use: mix-blend-mode: multiply
//               */
//             />
//           </div>
//           <div className="flex items-center ml-2">
//             <span className="text-xl md:text-2xl font-bold text-[#84A59D]">
//               OG
//             </span>
//             <span className="text-xl md:text-2xl font-light ml-2 text-[#F4F7F6]">
//               BLINDS
//             </span>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm font-bold text-[#F4F7F6] hover:text-[#84A59D] transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         {/* CTA Actions */}
//         <div className="hidden md:flex items-center gap-6">
//           <a
//             href="tel:+61403956504"
//             className="flex items-center gap-2 text-xs font-bold text-[#F4F7F6] hover:text-[#84A59D]"
//           >
//             <Phone className="w-3.5 h-3.5" />
//             +61 403 956 504
//           </a>
//           <a 
//             href="#get-started" 
//             className="rounded-md px-5 py-2 text-sm font-bold bg-[#84A59D] text-white hover:bg-[#6b8a83] transition-all"
//           >
//             Get Started
//           </a>
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-[#F4F7F6]"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div style={{ backgroundColor: '#2F3E46' }} className="md:hidden border-t border-white/10">
//           <nav className="px-4 py-6 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <a key={link.name} href={link.href} className="text-[#F4F7F6] font-bold py-2 border-b border-white/5">
//                 {link.name}
//               </a>
//             ))}
//             <a href="#get-started" className="bg-[#84A59D] text-white text-center py-3 rounded-lg font-bold">
//               Get Started
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "../assets/OG_logo.png"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
      style={{ backgroundColor: isScrolled ? '#2F3E46' : 'transparent' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-white p-1 rounded-sm flex items-center justify-center">
            <img 
              src={logoImg} 
              alt="OG Blinds Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="flex items-center ml-2">
            <span className="text-xl md:text-2xl font-bold text-white">
              OG
            </span>
            <span className="text-xl md:text-2xl font-light ml-2 text-[#F4F7F6]">
              BLINDS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-[#F4F7F6] hover:text-white/70 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+61403956504"
            className="flex items-center gap-2 text-xs font-bold text-[#F4F7F6] hover:text-white"
          >
            <Phone className="w-3.5 h-3.5" />
            +61 403 956 504
          </a>
          {/* UPDATED: Synchronized Button Color to #2F3E46 */}
          <a 
            href="#get-started" 
            className="rounded-md px-5 py-2 text-sm font-bold text-white transition-all border border-white/20 hover:bg-white/10"
            style={{ backgroundColor: '#2F3E46' }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#F4F7F6]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#2F3E46' }} className="md:hidden border-t border-white/10">
          <nav className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[#F4F7F6] font-bold py-2 border-b border-white/5">
                {link.name}
              </a>
            ))}
            {/* UPDATED: Mobile Button now matches Desktop and Theme color */}
            <a 
              href="#get-started" 
              className="text-white text-center py-3 rounded-lg font-bold shadow-inner"
              style={{ backgroundColor: '#2F3E46', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;