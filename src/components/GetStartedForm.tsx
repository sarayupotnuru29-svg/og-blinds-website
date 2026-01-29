import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const GetStartedForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const services = [
    "Roller Blinds",
    "Zebra Blinds",
    "Motorised & Smart Blinds",
    "Custom Blinds",
    "Free Measure & Quote",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `Hello OG Blinds!\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Location: ${formData.location}\n` +
      `Service Interested In: ${formData.service}\n` +
      `${formData.message ? `Message: ${formData.message}\n` : ""}` +
      `\nI would like to request a free measure and professional installation consultation.`
    );
    
    window.open(
      `https://wa.me/61403956504?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    /* UPDATED: Background set to Cloud (#F4F7F6) */
    <section 
      id="get-started" 
      className="py-12 md:py-16" 
      style={{ backgroundColor: '#F4F7F6' }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            {/* UPDATED: Text color to Deep Slate (#2F3E46) */}
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F3E46] mb-3">
              Get Started
            </h2>
            {/* UPDATED: Divider to Dusk Blue (#84A59D) */}
            <div className="mb-4 mx-auto w-16 h-1 bg-[#84A59D] rounded-full" />
            <p className="text-[#2F3E46]/80 text-base font-medium">
              Ready to transform your windows? Fill out the form below.
            </p>
          </div>

          {/* Form - White card with subtle Deep Slate border */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-[#2F3E46]/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-[#2F3E46] uppercase tracking-wider mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded bg-slate-50 text-sm text-[#2F3E46] focus:outline-none focus:ring-2 focus:ring-[#84A59D]/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold text-[#2F3E46] uppercase tracking-wider mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded bg-slate-50 text-sm text-[#2F3E46] focus:outline-none focus:ring-2 focus:ring-[#84A59D]/50 transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-xs font-bold text-[#2F3E46] uppercase tracking-wider mb-1"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded bg-slate-50 text-sm text-[#2F3E46] focus:outline-none focus:ring-2 focus:ring-[#84A59D]/50 transition-all"
                placeholder="Your suburb/area"
              />
            </div>

            {/* Service */}
            <div className="mb-4">
              <label
                htmlFor="service"
                className="block text-xs font-bold text-[#2F3E46] uppercase tracking-wider mb-1"
              >
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded bg-slate-50 text-sm text-[#2F3E46] focus:outline-none focus:ring-2 focus:ring-[#84A59D]/50 transition-all"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xs font-bold text-[#2F3E46] uppercase tracking-wider mb-1"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded bg-slate-50 text-sm text-[#2F3E46] focus:outline-none focus:ring-2 focus:ring-[#84A59D]/50 transition-all resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            {/* Features - Icons set to Dusk Blue (#84A59D) */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs text-[#2F3E46]/70">
              <div className="flex items-center gap-1.5 font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#84A59D]" />
                <span>Free Measure & Quote</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#84A59D]" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#84A59D]" />
                <span>Smart Home Ready</span>
              </div>
            </div>

            {/* Submit Button - Background set to Dusk Blue (#84A59D) */}
            <button
              type="submit"
              className="w-full bg-[#84A59D] text-white rounded-lg py-3.5 text-base font-bold flex items-center justify-center gap-2 hover:bg-[#6b8a83] hover:shadow-xl transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              Submit to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedForm;