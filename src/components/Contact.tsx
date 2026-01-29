// import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact" className="section-padding bg-muted">
//       <div className="container mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
//             Contact Us
//           </h2>
//           <div className="divider-accent mb-6" />
//           <p className="text-secondary max-w-2xl mx-auto text-lg">
//             Get in touch with our team for a free consultation and quote
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Business Hours */}
//           <div className="bg-card rounded shadow-card p-8">
//             <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
//               <Clock className="w-5 h-5 text-primary" />
//               Business Hours
//             </h3>
            
//             <div className="space-y-4 mb-8">
//               <div className="flex justify-between items-center py-3 border-b border-border">
//                 <span className="text-foreground font-medium">Monday – Friday</span>
//                 <span className="text-muted-foreground">8 AM – 7 PM</span>
//               </div>
//               <div className="flex justify-between items-center py-3 border-b border-border">
//                 <span className="text-foreground font-medium">Saturday – Sunday</span>
//                 <span className="text-muted-foreground">8 AM – 5 PM</span>
//               </div>
//             </div>

//             {/* Connect With Us - moved here */}
//             <h4 className="text-lg font-display font-semibold text-foreground mb-4">
//               Connect With Us
//             </h4>
            
//             <div className="space-y-4 mb-6">
//               {/* Phone */}
//               <a
//                 href="tel:+61403956504"
//                 className="flex items-center gap-3 group hover:text-primary transition-colors"
//               >
//                 <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
//                   <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
//                 </div>
//                 <span className="font-medium text-foreground text-sm">+61 403 956 504</span>
//               </a>

//               {/* Email */}
//               <a
//                 href="mailto:info@ogblinds.com.au"
//                 className="flex items-center gap-3 group hover:text-primary transition-colors"
//               >
//                 <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
//                   <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
//                 </div>
//                 <span className="font-medium text-foreground text-sm">info@ogblinds.com.au</span>
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/61403956504"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 group hover:text-primary transition-colors"
//               >
//                 <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
//                   <MessageCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
//                 </div>
//                 <span className="font-medium text-foreground text-sm">Chat with us</span>
//               </a>

//               {/* Address */}
//               <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-4 h-4 text-primary" />
//                 </div>
//                 <span className="font-medium text-foreground text-sm">45 Trickett Drive, Truganina, VIC 3029</span>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-3">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center hover:bg-primary group transition-colors"
//                 aria-label="Facebook"
//               >
//                 <svg className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
//                 </svg>
//               </a>
//               <a
//                 href="https://www.instagram.com/ogblinds"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center hover:bg-primary group transition-colors"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
//                 </svg>
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center hover:bg-primary group transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <svg className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.13,1.44-2.13,2.93v5.68H9.35V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Service Area */}
//           <div className="bg-card rounded shadow-card p-8">
//             <h3 className="text-xl font-display font-semibold text-foreground mb-6">
//               Service Area
//             </h3>
//             <div className="p-4 bg-accent/30 rounded mb-6">
//               <p className="text-sm text-muted-foreground">
//                 Melbourne, VIC and surrounding suburbs. Professional installation available across Victoria.
//               </p>
//             </div>

//             {/* Tagline */}
//             <div className="text-center">
//               <p className="text-xs text-muted-foreground mb-2">#RollerBlinds · #ZebraBlinds · #MotorisedBlinds · #SmartBlinds</p>
//               <p className="text-sm font-medium text-primary">
//                 Free Measure & Quote | Professional Installation | Smart Home Ready
//               </p>
//             </div>
//           </div>

//           {/* Quick Contact CTA */}
//           <div className="bg-card rounded shadow-card p-8">
//             <h3 className="text-xl font-display font-semibold text-foreground mb-6">
//               Get In Touch
//             </h3>
//             <p className="text-muted-foreground mb-6 text-sm">
//               Ready for premium window solutions? Contact us for a free measure and quote.
//             </p>
//             <a
//               href="https://wa.me/61403956504"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn-cta w-full text-center rounded flex items-center justify-center gap-2"
//             >
//               <MessageCircle className="w-5 h-5" />
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    /* UPDATED: Background set to Cloud (#F4F7F6) for consistency */
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#F4F7F6' }}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#2F3E46] mb-4">
            Contact Us
          </h2>
          {/* UPDATED: Divider set to #2F3E46 */}
          <div className="h-1.5 w-20 bg-[#2F3E46] mx-auto mb-6 rounded-full" />
          <p className="text-[#2F3E46]/80 max-w-2xl mx-auto text-lg">
            Get in touch with our team for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Hours */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5">
            <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#84A59D]" />
              Business Hours
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-[#2F3E46] font-medium">Monday – Friday</span>
                <span className="text-slate-500">8 AM – 7 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-[#2F3E46] font-medium">Saturday – Sunday</span>
                <span className="text-slate-500">8 AM – 5 PM</span>
              </div>
            </div>

            <h4 className="text-lg font-display font-semibold text-[#2F3E46] mb-4">
              Connect With Us
            </h4>
            
            <div className="space-y-4 mb-6">
              <a href="tel:+61403956504" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
                  <Phone className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">+61 403 956 504</span>
              </a>

              <a href="mailto:info@ogblinds.com.au" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
                  <Mail className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">info@ogblinds.com.au</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#84A59D]" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm">45 Trickett Drive, Truganina, VIC 3029</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-[#2F3E46]/5 rounded flex items-center justify-center hover:bg-[#2F3E46] group transition-all"
                  aria-label={social}
                >
                  <div className="w-4 h-4 text-[#2F3E46] group-hover:text-white transition-colors">
                    {/* SVG content would go here */}
                    <span className="text-[10px]">IN</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5">
            <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6">
              Service Area
            </h3>
            <div className="p-4 bg-[#F4F7F6] rounded-lg mb-6 border border-[#2F3E46]/5">
              <p className="text-sm text-[#2F3E46]/70 leading-relaxed">
                Melbourne, VIC and surrounding suburbs. Professional installation available across Victoria.
              </p>
            </div>

            <div className="text-center mt-auto">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">#RollerBlinds · #ZebraBlinds · #SmartBlinds</p>
              <p className="text-sm font-bold text-[#84A59D]">
                Free Measure & Quote | Professional Installation
              </p>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5 flex flex-col justify-center">
            <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6">
              Get In Touch
            </h3>
            <p className="text-[#2F3E46]/70 mb-8 text-sm leading-relaxed">
              Ready for premium window solutions? Contact us for a free measure and quote.
            </p>
            
            {/* UPDATED: Chat on WhatsApp button set to #2F3E46 */}
            <a
              href="https://wa.me/61403956504"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 text-center rounded-lg flex items-center justify-center gap-2 text-white font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
              style={{ backgroundColor: '#2F3E46' }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;