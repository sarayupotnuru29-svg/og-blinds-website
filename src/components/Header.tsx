// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";

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
//         isScrolled
//           ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-3">
//           <img 
//             src="/src/assets/og-blinds-logo.png" 
//             alt="OG Blinds Logo" 
//             className="w-10 h-10 md:w-12 md:h-12 object-contain"
//           />
//           <div className="flex items-center gap-1">
//             <span className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
//               isScrolled ? "text-primary" : "text-primary-foreground"
//             }`}>
//               OG
//             </span>
//             <span className={`text-2xl md:text-3xl font-display font-light tracking-tight ${
//               isScrolled ? "text-foreground" : "text-primary-foreground"
//             }`}>
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
//               className={`nav-link ${
//                 isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
//               }`}
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:flex items-center gap-4">
//           <a
//             href="tel:+61403956504"
//             className={`flex items-center gap-2 text-sm font-medium ${
//               isScrolled ? "text-foreground" : "text-primary-foreground"
//             }`}
//           >
//             <Phone className="w-4 h-4" />
//             +61 403 956 504
//           </a>
//           <a href="#get-started" className="btn-cta rounded">
//             Get Started
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className={`md:hidden p-2 ${
//             isScrolled ? "text-foreground" : "text-primary-foreground"
//           }`}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-card border-t border-border animate-fade-in">
//           <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-foreground hover:text-primary font-medium py-2"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href="tel:+61403956504"
//               className="flex items-center gap-2 text-foreground font-medium py-2"
//             >
//               <Phone className="w-4 h-4" />
//               +61 403 956 504
//             </a>
//             <a
//               href="#get-started"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="btn-cta rounded text-center mt-2"
//             >
//               Get Started
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";

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
//         isScrolled
//           ? "bg-[#E1D0B3]/95 backdrop-blur-md shadow-md py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo and Brand Text Modification */}
//         <a href="#home" className="flex items-center gap-2 group">
//           <img 
//             src="/src/assets/og-blinds-logo.png" 
//             alt="OG Blinds Logo" 
//             className="w-8 h-8 md:w-10 md:h-10 object-contain"
//           />
//           <div className="flex items-center gap-1">
//             {/* OG - Always highlighted in the Gold/CTA color */}
//             <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-cta">
//               OG
//             </span>
//             {/* BLINDS - Modified to match the Dark Charcoal style from Image 2 */}
//             <span className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${
//               isScrolled ? "text-[#1A1F2C]" : "text-[#1A1F2C]"
//             }`}>
//               BLINDS
//             </span>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm font-bold text-[#1A1F2C] hover:text-cta transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         {/* CTA Actions */}
//         <div className="hidden md:flex items-center gap-6">
//           <a
//             href="tel:+61403956504"
//             className="flex items-center gap-2 text-xs font-bold text-[#1A1F2C] hover:text-cta transition-colors"
//           >
//             <Phone className="w-3.5 h-3.5 text-cta" />
//             +61 403 956 504
//           </a>
//           <a href="#get-started" className="btn-cta rounded-md px-5 py-2 text-sm font-bold shadow-sm transition-transform active:scale-95">
//             Get Started
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-[#1A1F2C]"
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#E1D0B3] border-t border-black/10 animate-fade-in shadow-xl">
//           <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-[#1A1F2C] hover:text-cta font-bold py-2 border-b border-black/5 text-base"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="flex flex-col gap-4 mt-2">
//               <a href="tel:+61403956504" className="flex items-center gap-3 text-[#1A1F2C] font-bold py-2">
//                 <Phone className="w-4 h-4 text-cta" />
//                 +61 403 956 504
//               </a>
//               <a href="#get-started" onClick={() => setIsMobileMenuOpen(false)} className="btn-cta rounded-lg text-center py-3 font-bold">
//                 Get Started
//               </a>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// 




import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

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
        isScrolled
          ? "backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
      style={{ backgroundColor: isScrolled ? '#504B38' : 'transparent' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="/src/assets/og-blinds-logo.png" 
            alt="OG Blinds Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div className="flex items-center">
            {/* OG - Brand Yellow */}
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-[#F3B111]">
              OG
            </span>
            {/* BLINDS - Updated to Navy Blue (#1A2238) */}
            {/* Added a conditional text-white on scroll so it doesn't disappear on the dark moss background */}
            <span className={`text-xl md:text-2xl font-display font-light tracking-tight ml-2 transition-colors duration-300 ${
              isScrolled ? "text-[#EBE5C2]" : "text-[#1A2238]"
            }`}>
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
              className={`text-sm font-bold transition-colors ${
                isScrolled ? "text-[#EBE5C2] hover:text-white" : "text-[#504B38] hover:text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+61403956504"
            className={`flex items-center gap-2 text-xs font-bold transition-colors ${
              isScrolled ? "text-[#EBE5C2]" : "text-[#504B38]"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            +61 403 956 504
          </a>
          {/* Get Started Button - Yellow */}
          <a 
            href="#get-started" 
            className="rounded-md px-5 py-2 text-sm font-bold shadow-sm transition-all active:scale-95 bg-[#F3B111] text-black hover:bg-[#d99d0f] hover:shadow-md"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${isScrolled ? "text-[#EBE5C2]" : "text-[#504B38]"}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          style={{ backgroundColor: '#504B38' }} 
          className="md:hidden border-t border-white/10 animate-fade-in shadow-xl"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#EBE5C2] hover:text-white font-bold py-2 border-b border-white/5 text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-2">
              <a href="tel:+61403956504" className="flex items-center gap-3 text-[#EBE5C2] font-bold py-2">
                <Phone className="w-4 h-4" />
                +61 403 956 504
              </a>
              <a 
                href="#get-started" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-[#F3B111] text-black rounded-lg text-center py-3 font-bold hover:bg-[#d99d0f]"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;