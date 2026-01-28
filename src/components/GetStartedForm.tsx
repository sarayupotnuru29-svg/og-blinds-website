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
    
    // Construct WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello OG Blinds!\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Location: ${formData.location}\n` +
      `Service Interested In: ${formData.service}\n` +
      `${formData.message ? `Message: ${formData.message}\n` : ""}` +
      `\nI would like to request a free measure and professional installation consultation.`
    );
    
    // Redirect to WhatsApp
    window.open(
      `https://wa.me/61403956504?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section id="get-started" className="section-padding gradient-dark">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Get Started
            </h2>
            <div className="divider-accent mb-6" />
            <p className="text-primary-foreground/80 text-lg">
              Ready to transform your windows? Fill out the form below and we'll get in touch via WhatsApp.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
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
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
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
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-foreground mb-2"
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
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your suburb/area"
              />
            </div>

            {/* Service */}
            <div className="mb-6">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Free Measure & Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Smart Home Ready</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-cta rounded py-4 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedForm;
