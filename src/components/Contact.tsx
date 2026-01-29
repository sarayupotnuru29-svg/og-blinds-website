// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   MessageCircle, 
//   Instagram,
//   Facebook // Added Facebook icon import
// } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#F4F7F6' }}>
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#2F3E46] mb-4">
//             Contact Us
//           </h2>
//           <div className="h-1.5 w-20 bg-[#2F3E46] mx-auto mb-6 rounded-full" />
//           <p className="text-[#2F3E46]/80 max-w-2xl mx-auto text-lg">
//             Get in touch with our team for a free consultation and quote
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Business Hours & Connect */}
//           <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5">
//             <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6 flex items-center gap-2">
//               <Clock className="w-5 h-5 text-[#84A59D]" />
//               Business Hours
//             </h3>
            
//             <div className="space-y-4 mb-8">
//               <div className="flex justify-between items-center py-3 border-b border-slate-100">
//                 <span className="text-[#2F3E46] font-medium">Monday – Friday</span>
//                 <span className="text-slate-500">8 AM – 7 PM</span>
//               </div>
//               <div className="flex justify-between items-center py-3 border-b border-slate-100">
//                 <span className="text-[#2F3E46] font-medium">Saturday – Sunday</span>
//                 <span className="text-slate-500">8 AM – 5 PM</span>
//               </div>
//             </div>

//             <h4 className="text-lg font-display font-semibold text-[#2F3E46] mb-4">
//               Connect With Us
//             </h4>
            
//             <div className="space-y-4">
//               {/* Phone */}
//               <a href="tel:+61403956504" className="flex items-center gap-3 group">
//                 <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
//                   <Phone className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
//                 </div>
//                 <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">+61 403 956 504</span>
//               </a>

//               {/* Email */}
//               <a href="mailto:info@ogblinds.com.au" className="flex items-center gap-3 group">
//                 <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
//                   <Mail className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
//                 </div>
//                 <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">info@ogblinds.com.au</span>
//               </a>

//               {/* Address */}
//               <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-4 h-4 text-[#84A59D]" />
//                 </div>
//                 <span className="font-medium text-[#2F3E46] text-sm">45 Trickett Drive, Truganina, VIC 3029</span>
//               </div>

//               {/* Instagram Handle */}
//               <a 
//                 href="https://www.instagram.com/ogblinds?igsh=dzQ3bGV4eWxoY2dt" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
//                   <Instagram className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
//                 </div>
//                 <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">@ogblinds</span>
//               </a>

//               {/* Facebook Account - Added with matching hover effects */}
//               <a 
//                 href="https://www.facebook.com/share/17vYCM3gYN/?mibextid=wwXIfr" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
//                   <Facebook className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
//                 </div>
//                 <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">OG Blinds Facebook</span>
//               </a>
//             </div>
//           </div>

//           {/* Service Area */}
//           <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5 flex flex-col">
//             <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6">
//               Service Area
//             </h3>
//             <div className="p-4 bg-[#F4F7F6] rounded-lg mb-6 border border-[#2F3E46]/5">
//               <p className="text-sm text-[#2F3E46]/70 leading-relaxed">
//                 Melbourne, VIC and surrounding suburbs. Professional installation available across Victoria.
//               </p>
//             </div>

//             <div className="text-center mt-auto">
//               <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">#RollerBlinds · #ZebraBlinds · #SmartBlinds</p>
//               <p className="text-sm font-bold text-[#84A59D]">
//                 Free Measure & Quote | Professional Installation
//               </p>
//             </div>
//           </div>

//           {/* Quick Contact CTA */}
//           <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5 flex flex-col justify-center">
//             <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6">
//               Get In Touch
//             </h3>
//             <p className="text-[#2F3E46]/70 mb-8 text-sm leading-relaxed">
//               Ready for premium window solutions? Contact us for a free measure and quote.
//             </p>
            
//             <a
//               href="https://wa.me/61403956504"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full py-4 text-center rounded-lg flex items-center justify-center gap-2 text-white font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
//               style={{ backgroundColor: '#2F3E46' }}
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



import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram,
  Facebook 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#F4F7F6' }}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#2F3E46] mb-4">
            Contact Us
          </h2>
          <div className="h-1.5 w-20 bg-[#2F3E46] mx-auto mb-6 rounded-full" />
          <p className="text-[#2F3E46]/80 max-w-2xl mx-auto text-lg">
            Get in touch with our team for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Hours & Connect */}
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
            
            <div className="space-y-4">
              {/* Phone */}
              <a href="tel:+61403956504" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
                  <Phone className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">+61 403 956 504</span>
              </a>

              {/* Email */}
              <a href="mailto:info@ogblinds.com.au" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
                  <Mail className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">info@ogblinds.com.au</span>
              </a>

              {/* Address - VIC removed */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#84A59D]" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm">45 Trickett Drive, Truganina, Melbourne 3029</span>
              </div>

              {/* Instagram Handle */}
              <a 
                href="https://www.instagram.com/ogblinds?igsh=dzQ3bGV4eWxoY2dt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
                  <Instagram className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">@ogblinds</span>
              </a>

              {/* Facebook Account */}
              <a 
                href="https://www.facebook.com/share/17vYCM3gYN/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 bg-[#84A59D]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A59D] transition-colors">
                  <Facebook className="w-4 h-4 text-[#84A59D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-[#2F3E46] text-sm group-hover:text-[#84A59D] transition-colors">OG Blinds Facebook</span>
              </a>
            </div>
          </div>

          {/* Service Area - Updated to Melbourne only */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-[#2F3E46]/5 flex flex-col">
            <h3 className="text-xl font-display font-semibold text-[#2F3E46] mb-6">
              Service Area
            </h3>
            <div className="p-4 bg-[#F4F7F6] rounded-lg mb-6 border border-[#2F3E46]/5">
              <p className="text-sm text-[#2F3E46]/70 leading-relaxed">
                Melbourne and surrounding suburbs. Professional installation available across Victoria.
              </p>
            </div>

            <div className="text-center mt-auto">
              {/* Added Custom Print Blinds hashtag */}
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">#RollerBlinds · #ZebraBlinds · #SmartBlinds · #CustomPrintBlinds</p>
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