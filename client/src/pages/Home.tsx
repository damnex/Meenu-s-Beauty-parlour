import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { BookingModal } from "@/components/BookingModal";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Star, Clock, Heart, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import bridalImage from "@/assets/hero_bridal.png";

import beautician1 from "@/assets/gallery/beautician/1.png";
import beautician2 from "@/assets/gallery/beautician/2.png";
import beautician3 from "@/assets/gallery/beautician/3.png";
import waterproof1 from "@/assets/gallery/waterproof/1.png";
import waterproof2 from "@/assets/gallery/waterproof/2.png";
import waterproof3 from "@/assets/gallery/waterproof/3.png";
import hairdo1 from "@/assets/gallery/hairdo/1.png";
import hairdo2 from "@/assets/gallery/hairdo/2.png";
import hairdo3 from "@/assets/gallery/hairdo/3.png";
import glossy1 from "@/assets/gallery/glossy/1.png";
import glossy2 from "@/assets/gallery/glossy/2.png";
import glossy3 from "@/assets/gallery/glossy/3.png";
import skinfinish1 from "@/assets/gallery/skinfinish/1.png";
import skinfinish2 from "@/assets/gallery/skinfinish/2.png";
import skinfinish3 from "@/assets/gallery/skinfinish/3.png";
import saree1 from "@/assets/gallery/saree/1.png";
import saree2 from "@/assets/gallery/saree/2.png";
import saree3 from "@/assets/gallery/saree/3.png";
import kids1 from "@/assets/gallery/kids/1.png";
import kids2 from "@/assets/gallery/kids/2.png";
import kids3 from "@/assets/gallery/kids/3.png";
import mehandi1 from "@/assets/gallery/mehandi/1.png";
import mehandi2 from "@/assets/gallery/mehandi/2.png";
import mehandi3 from "@/assets/gallery/mehandi/3.png";

import meenuArtist from "@/assets/meenu-artist.jpg";

export default function Home() {
  const [activeGalleryTab, setActiveGalleryTab] = useState("beautician");

  const services = [
    { id: "beautician", title: "Beautician Makeup", desc: "Professional full-face makeup for any occasion." },
    { id: "waterproof", title: "Waterproof Makeup", desc: "Long-lasting, sweat-proof makeup ideal for events." },
    { id: "hairdo", title: "Hairdo", desc: "Intricate braids, buns, and modern hairstyles." },
    { id: "glossy", title: "Glossy Makeup", desc: "Radiant, dewy finish for a youthful glow." },
    { id: "skinfinish", title: "Skin Finish Makeup", desc: "Natural, 'no-makeup' makeup look." },
    { id: "saree", title: "Saree Draping", desc: "Perfect pleats for all regional saree styles." },
    { id: "kids", title: "Kids Variety Makeup", desc: "Gentle, fun styling for school events and parties." },
    { id: "mehandi", title: "Mehandi Preparation", desc: "Traditional and arabic designs for hands and feet." },
  ];

  const offers = [
    { title: "Bridal Package Offer", desc: "Book full bridal package & get Groom Makeup FREE!" },
    { title: "Group Discount", desc: "10% off for group bookings of 3 or more." },
    { title: "Early Bird", desc: "Book 3 months in advance for a special gift hamper." },
  ];

  const galleryCategories = [
    { id: "beautician", label: "Beautician Makeup" },
    { id: "waterproof", label: "Waterproof Makeup" },
    { id: "hairdo", label: "Hairdo" },
    { id: "glossy", label: "Glossy Makeup" },
    { id: "skinfinish", label: "Skin Finish Makeup" },
    { id: "saree", label: "Saree Draping" },
    { id: "kids", label: "Kids Variety Makeup" },
    { id: "mehandi", label: "Mehandi Preparation" },
  ];

  const galleryImages: Record<string, string[]> = {
    beautician: [beautician1, beautician2, beautician3],
    waterproof: [waterproof1, waterproof2, waterproof3],
    hairdo: [hairdo1, hairdo2, hairdo3],
    glossy: [glossy1, glossy2, glossy3],
    skinfinish: [skinfinish1, skinfinish2, skinfinish3],
    saree: [saree1, saree2, saree3],
    kids: [kids1, kids2, kids3],
    mehandi: [mehandi1, mehandi2, mehandi3],
  };

  const galleryAltText: Record<string, string[]> = {
    beautician: ["Elegant bridal makeup with traditional jewelry", "Close-up of professional eye makeup", "Full-face makeover for a special occasion"],
    waterproof: ["Long-lasting makeup for rainy outdoor events", "Flawless waterproof bridal look", "Sweat-proof makeup for long ceremonies"],
    hairdo: ["Intricate traditional Indian braid with flowers", "Modern elegant bun with accessories", "Stylish contemporary hair design"],
    glossy: ["Radiant dewy finish for a natural glow", "High-shine editorial makeup look", "Soft glossy transformation"],
    skinfinish: ["Natural no-makeup makeup look", "Seamless skin-perfecting finish", "Lightweight daily makeover"],
    saree: ["Perfectly pleated traditional silk saree", "Elegant modern saree draping style", "Intricate saree pleats and pallu"],
    kids: ["Gentle festive makeup for children", "Fun and colorful kids' styling", "Subtle makeup for school events"],
    mehandi: ["Traditional mehandi design for hands", "Intricate Arabic mehandi patterns", "Full bridal mehandi preparation"],
  };

  const handleServiceClick = (serviceId: string) => {
    setActiveGalleryTab(serviceId);
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-10" />
          <img
            src={bridalImage}
            alt="Beautiful Indian Bride"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container-custom z-20 relative">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-script text-4xl md:text-5xl text-primary block mb-4">
                Welcome to
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
                Meenu's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Beauty Parlour
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg leading-relaxed">
                Enhancing Your Natural Beauty with Tradition & Care. Step into a world of elegance and let us transform you for your special day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingModal />
                <a
                  href="#services"
                  className="px-8 py-4 rounded-full border-2 border-foreground/10 hover:border-foreground/30 text-foreground font-semibold text-center transition-all bg-white/50 backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Floating) */}
      <div className="container-custom mt-12 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl p-8 border border-border">
          {[
            { icon: Clock, label: "Years Experience", value: "8+" },
            { icon: Heart, label: "Happy Clients", value: "200+" },
            { icon: Award, label: "Certified", value: "Pro" },
            { icon: Star, label: "Rating", value: "4.9" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold font-serif text-foreground leading-none mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] overflow-hidden">
                <img 
                  src={meenuArtist} 
                  alt="Meenu - Professional Beauty Artist" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading align="left" subtitle="Meet the Artist" title="Artistry with Passion" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hi, I'm Meenu. With over 8 years of experience in the beauty industry, I have had the privilege of transforming over 200 beautiful souls for their most cherished moments.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My approach is personal and friendly. I believe makeup shouldn't hide you, but reveal the most confident version of yourself. Whether it's a traditional bridal look or a chic party style, I pour my heart into every brushstroke.
              </p>
              <div className="flex gap-4">
                <BookingModal trigger={
                  <button className="text-primary font-semibold border-b-2 border-primary hover:text-primary/80 transition-colors">
                    Book an Appointment
                  </button>
                } />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading subtitle="Our Expertise" title="Premium Beauty Services" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.desc}
                delay={index}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic mb-6">
              * Custom packages available for events and weddings.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container-custom">
          <SectionHeading subtitle="Portfolio" title="Our Recent Works" />
          
          <Tabs value={activeGalleryTab} onValueChange={setActiveGalleryTab} className="w-full">
            <div className="relative mb-8">
              <div className="overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
                <TabsList className="inline-flex w-max gap-2 p-2 bg-white rounded-2xl border shadow-sm">
                  {galleryCategories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      data-testid={`tab-gallery-${cat.id}`}
                      className="rounded-full px-4 py-2 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all text-sm"
                    >
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            
            {galleryCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="gallery-grid">
                  {galleryImages[cat.id]?.map((imgSrc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="gallery-item group relative cursor-pointer"
                      data-testid={`gallery-item-${cat.id}-${index + 1}`}
                    >
                      <img
                        src={imgSrc}
                        alt={galleryAltText[cat.id]?.[index] || `${cat.label} ${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8">
                        <h4 className="text-white font-serif text-xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {cat.label}
                        </h4>
                        <BookingModal defaultService={cat.label} trigger={
                          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            Book This Look
                          </button>
                        } />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <SectionHeading light subtitle="Exclusive Deals" title="Special Offers" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {offers.map((offer, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl shadow-lg">
                  %
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{offer.title}</h3>
                <p className="text-white/80 mb-6">{offer.desc}</p>
                <BookingModal />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-white/20 rounded-lg backdrop-blur text-sm font-medium tracking-wide">
              ⚠ PRE-BOOKING IS IMPORTANT FOR ALL SERVICES
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container-custom">
          <SectionHeading subtitle="Get in Touch" title="Contact Us" />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">Visit Us</h4>
                  <p className="text-muted-foreground">
                    123 Beauty Lane, Near City Center,<br />
                    Cuddalore, Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">Call Us</h4>
                  <p className="text-muted-foreground font-mono">+91 95143 31529</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">Email</h4>
                  <p className="text-muted-foreground break-all">Meenambigaimeenambigai141@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary shrink-0">
                  <Instagram />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">Follow Us</h4>
                  <a href="https://www.instagram.com/meenus_beauty" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@meenus_beauty</a>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-border">
              {/* Placeholder for Map - using an iframe for a generic location or specific if provided */}
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2408496329147!2d79.49626321529486!3d11.536864600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527bb85640189f%3A0xca5989eb3d2ae1a4!2s11.5368646%2C%2079.4983333!5e0!3m2!1sen!2sin!4v1706958656789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 border-t border-white/10">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold mb-2">Meenu's</h2>
          <p className="text-white/60 text-sm mb-8">Beauty Parlour • Cuddalore</p>
          <div className="h-px w-24 bg-white/20 mx-auto mb-8" />
          <p className="text-white/40 text-sm">
            © 2026 Meenu's Beauty Parlour. All rights reserved. <br />
            Designed with <Heart className="w-3 h-3 inline text-primary mx-1" /> for Beauty. <br />
            <span className="mt-2 block">Built by <a href="https://www.linkedin.com/in/dheenadhayalan-muruganantham/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">Damnex</a></span>
          </p>
        </div>
      </footer>
    </div>
  );
}
