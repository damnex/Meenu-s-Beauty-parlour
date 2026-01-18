import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { BookingModal } from "@/components/BookingModal";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Star, Clock, Heart, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import local assets or use placeholders
import artistImage from "@assets/stock_images/professional_indian__d080ebb3.jpg";
import bridalImage from "@assets/stock_images/indian_bridal_makeup_8096a08a.jpg";
import facialImage from "@assets/stock_images/facial_spa_treatment_b2476ffb.jpg";
import hairImage from "@assets/stock_images/indian_hairstyle_bra_9d459492.jpg";
import mehandiImage from "@assets/stock_images/beautiful_mehandi_de_54fa2cc8.jpg";

export default function Home() {
  const services = [
    { title: "Beautician Makeup", desc: "Professional full-face makeup for any occasion." },
    { title: "Waterproof Makeup", desc: "Long-lasting, sweat-proof makeup ideal for events." },
    { title: "Hairdo & Styling", desc: "Intricate braids, buns, and modern hairstyles." },
    { title: "Glossy Makeup", desc: "Radiant, dewy finish for a youthful glow." },
    { title: "Skin Finish Makeup", desc: "Natural, 'no-makeup' makeup look." },
    { title: "Saree Draping", desc: "Perfect pleats for all regional saree styles." },
    { title: "Kids Variety Makeup", desc: "Gentle, fun styling for school events and parties." },
    { title: "Mehandi Art", desc: "Traditional and arabic designs for hands and feet." },
  ];

  const offers = [
    { title: "Bridal Package Offer", desc: "Book full bridal package & get Groom Makeup FREE!" },
    { title: "Group Discount", desc: "10% off for group bookings of 3 or more." },
    { title: "Early Bird", desc: "Book 3 months in advance for a special gift hamper." },
  ];

  const galleryCategories = [
    { id: "bridal", label: "Bridal", img: bridalImage },
    { id: "facial", label: "Facial", img: facialImage },
    { id: "hair", label: "Hairstyle", img: hairImage },
    { id: "mehandi", label: "Mehandi", img: mehandiImage },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-10" />
          <img
            src={bridalImage}
            alt="Beautiful Indian Bride"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 z-20 relative">
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
      <div className="container mx-auto px-4 mt-12 relative z-30">
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105" />
              <img
                src={artistImage}
                alt="Meenu - Makeup Artist"
                className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover"
              />
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
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Expertise" title="Premium Beauty Services" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.desc}
                delay={index}
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
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Portfolio" title="Our Recent Works" />
          
          <Tabs defaultValue="bridal" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-auto p-1 bg-white rounded-full border shadow-sm">
              {galleryCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-full py-3 data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {galleryCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Generate multiple placeholder cards per category */}
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                    >
                      <img
                        src={cat.img}
                        alt={`${cat.label} ${item}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <BookingModal defaultService={cat.label} trigger={
                          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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
        
        <div className="container mx-auto px-4 relative z-10">
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
        <div className="container mx-auto px-4">
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
                    Tirunelveli, Tamil Nadu, India.
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
                  <a href="#" className="text-primary hover:underline">@meenus_beauty</a>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-border">
              {/* Placeholder for Map - using an iframe for a generic location or specific if provided */}
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.465492982823!2d77.7289!3d8.7366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDQnMTEuOCJOIDc3wrA0Myw0NC4wIkU!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-2">Meenu's</h2>
          <p className="text-white/60 text-sm mb-8">Beauty Parlour • Tirunelveli</p>
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
