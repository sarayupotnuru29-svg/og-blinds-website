import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const businessHours = [
    { day: "Monday – Friday", hours: "8 AM – 7 PM" },
    { day: "Saturday", hours: "8 AM – 5 PM" },
    { day: "Sunday", hours: "8 AM – 5 PM" },
  ];

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      "Hello OG Blinds! I would like to enquire about your premium window blind solutions."
    );
    window.open(`https://wa.me/61403956504?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="divider-accent mb-6" />
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Get in touch with our team for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="bg-card rounded shadow-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Contact Details
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+61403956504"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+61 403 956 504</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@ogblinds.com.au"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">info@ogblinds.com.au</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/61403956504"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground">Chat with us</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-foreground">
                    45 Trickett Drive<br />
                    Truganina, VIC 3029
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-card rounded shadow-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Business Hours
            </h3>
            
            <div className="space-y-4">
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                >
                  <span className="text-foreground font-medium">{item.day}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Need immediate assistance? Contact us via WhatsApp for quick response.
              </p>
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full btn-cta rounded py-3 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit via WhatsApp
              </button>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div className="bg-card rounded shadow-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Connect With Us
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center hover:bg-primary group transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ogblinds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center hover:bg-primary group transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center hover:bg-primary group transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.13,1.44-2.13,2.93v5.68H9.35V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/>
                </svg>
              </a>
            </div>

            {/* Service Area */}
            <div className="p-4 bg-accent/30 rounded mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Service Area</p>
              <p className="text-sm text-muted-foreground">
                Melbourne, VIC and surrounding suburbs. Professional installation available across Victoria.
              </p>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">#RollerBlinds · #ZebraBlinds · #MotorisedBlinds · #SmartBlinds</p>
              <p className="text-sm font-medium text-primary">
                Free Measure & Quote | Professional Installation | Smart Home Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
