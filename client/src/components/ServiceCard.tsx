import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  price?: string;
  delay?: number;
  onClick?: () => void;
}

export function ServiceCard({ title, description, price, delay = 0, onClick }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Check className="w-5 h-5 text-accent-foreground" />
      </div>
      <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
          {description}
        </p>
      )}
      {price && (
        <div className="mt-auto pt-4 border-t border-dashed border-gray-100">
          <span className="text-accent font-bold text-lg">{price}</span>
        </div>
      )}
    </motion.div>
  );
}
