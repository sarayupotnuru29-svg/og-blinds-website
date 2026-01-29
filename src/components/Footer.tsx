// import { Phone, Mail, MapPin } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Services", href: "#services" },
//     { name: "About", href: "#about" },
//     { name: "Contact", href: "#contact" },
//     { name: "Get Started", href: "#get-started" },
//   ];

//   const services = [
//     "Roller Blinds",
//     "Zebra Blinds",
//     "Motorised Blinds",
//     "Smart Blinds",
//     "Custom Solutions",
//   ];

//   return (
//     /* Background set to #504B38 and text to light almond #EBE5C2 */
//     <footer style={{ backgroundColor: '#504B38' }} className="text-[#EBE5C2]">
//       {/* Main Footer */}
//       <div className="container mx-auto px-4 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <a href="#home" className="inline-block mb-4">
//               <span className="text-3xl font-display font-bold text-[#EBE5C2] mr-2">
//                 OG
//               </span>
//               <span className="text-3xl font-display font-light text-[#EBE5C2]">
//                 BLINDS
//               </span>
//             </a>
//             <p className="text-[#EBE5C2]/70 text-sm leading-relaxed mb-6">
//               Premium Blinds & Smart Window Solutions. Transform your home with stylish, 
//               motorised blinds controlled via Alexa, Siri, Google Home & Phone App.
//             </p>
//             {/* Social Links */}
//             <div className="flex gap-3">
//               {[
//                 { label: "Facebook", path: "M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" },
//                 { label: "Instagram", path: "M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" },
//               ].map((social) => (
//                 <a
//                   key={social.label}
//                   href="#"
//                   className="w-10 h-10 bg-[#EBE5C2]/10 rounded flex items-center justify-center text-[#EBE5C2] hover:bg-[#EBE5C2] hover:text-[#504B38] transition-all"
//                   aria-label={social.label}
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d={social.path}/>
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#EBE5C2]/90">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a 
//                     href={link.href} 
//                     className="text-[#EBE5C2]/60 hover:text-white transition-colors text-sm font-medium"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#EBE5C2]/90">Our Services</h4>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <a 
//                     href="#services" 
//                     className="text-[#EBE5C2]/60 hover:text-white transition-colors text-sm font-medium"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#EBE5C2]/90">Contact Info</h4>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-3 text-[#EBE5C2]/70 text-sm font-medium">
//                 <Phone className="w-4 h-4 text-[#EBE5C2]/50" />
//                 +61 403 956 504
//               </li>
//               <li className="flex items-center gap-3 text-[#EBE5C2]/70 text-sm font-medium">
//                 <Mail className="w-4 h-4 text-[#EBE5C2]/50" />
//                 info@ogblinds.com.au
//               </li>
//               <li className="flex items-start gap-3 text-[#EBE5C2]/70 text-sm font-medium">
//                 <MapPin className="w-4 h-4 text-[#EBE5C2]/50 mt-0.5" />
//                 <span>45 Trickett Drive, Truganina, VIC 3029</span>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-[#EBE5C2]/10">
//         <div className="container mx-auto px-4 py-6 text-center md:text-left">
//           <p className="text-xs text-[#EBE5C2]/40 font-medium tracking-wide">
//             © {currentYear} OG BLINDS. ALL RIGHTS RESERVED. | MELBOURNE, VIC
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Phone, Mail, MapPin } from "lucide-react";

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
    "Motorised Blinds",
    "Smart Blinds",
    "Custom Solutions",
  ];

  return (
    /* Updated Background to Deep Slate (#2F3E46) and default text to Cloud (#F4F7F6) */
    <footer style={{ backgroundColor: '#2F3E46' }} className="text-[#F4F7F6]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4 group">
              {/* OG in Dusk Blue (#84A59D) */}
              <span className="text-3xl font-display font-bold text-[#84A59D] mr-2">
                OG
              </span>
              {/* BLINDS in Cloud (#F4F7F6) */}
              <span className="text-3xl font-display font-light text-[#F4F7F6]">
                BLINDS
              </span>
            </a>
            <p className="text-[#F4F7F6]/70 text-sm leading-relaxed mb-6">
              Premium Blinds & Smart Window Solutions. Transform your home with stylish, 
              motorised blinds controlled via Alexa, Siri, Google Home & Phone App.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: "Facebook", path: "M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" },
                { label: "Instagram", path: "M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-[#F4F7F6]/10 rounded flex items-center justify-center text-[#F4F7F6] hover:bg-[#84A59D] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#F4F7F6]/90 border-b border-[#84A59D]/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[#F4F7F6]/60 hover:text-[#84A59D] transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#F4F7F6]/90 border-b border-[#84A59D]/30 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-[#F4F7F6]/60 hover:text-[#84A59D] transition-colors text-sm font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#F4F7F6]/90 border-b border-[#84A59D]/30 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#F4F7F6]/70 text-sm font-medium">
                <Phone className="w-4 h-4 text-[#84A59D]" />
                +61 403 956 504
              </li>
              <li className="flex items-center gap-3 text-[#F4F7F6]/70 text-sm font-medium">
                <Mail className="w-4 h-4 text-[#84A59D]" />
                info@ogblinds.com.au
              </li>
              <li className="flex items-start gap-3 text-[#F4F7F6]/70 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#84A59D] mt-0.5" />
                <span>45 Trickett Drive, Truganina, VIC 3029</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F4F7F6]/10">
        <div className="container mx-auto px-4 py-6 text-center md:text-left">
          <p className="text-xs text-[#F4F7F6]/30 font-medium tracking-wide">
            © {currentYear} OG BLINDS. ALL RIGHTS RESERVED. | MELBOURNE, VIC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;