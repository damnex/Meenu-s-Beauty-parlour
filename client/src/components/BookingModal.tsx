import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { api } from "@shared/routes"; // Import api definition for stricter typing if needed
import { useCreateInquiry } from "@/hooks/use-inquiries";

const SERVICES_LIST = [
  "Beautician Makeup",
  "Waterproof Makeup",
  "Hairdo",
  "Glossy Makeup",
  "Skin Finish Makeup",
  "Saree Draping",
  "Kids Variety Makeup",
  "Mehandi Preparation",
];

interface BookingModalProps {
  trigger?: React.ReactNode;
  defaultService?: string;
}

export function BookingModal({ trigger, defaultService }: BookingModalProps) {
  const [name, setName] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : []
  );
  const [notes, setNotes] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const createInquiry = useCreateInquiry();

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        variant: "destructive",
        title: "Name required",
        description: "Please enter your name to book an appointment.",
      });
      return;
    }

    // 1. Log to DB (optional/parallel)
    createInquiry.mutate({
      name,
      services: selectedServices,
      notes: notes || undefined,
    }, {
      onSuccess: () => {
        // Optional: Analytics or further processing
      }
    });

    // 2. Open WhatsApp
    const servicesText = selectedServices.length > 0 
      ? `\nServices: ${selectedServices.join(", ")}` 
      : "";
    const notesText = notes ? `\nNotes: ${notes}` : "";
    
    const message = `Hi Meenu, I would like to book an appointment.\n\nName: ${name}${servicesText}${notesText}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919514331529?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setOpen(false);
    
    toast({
      title: "Opening WhatsApp...",
      description: "Please send the message to confirm your booking.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 shadow-xl shadow-green-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <MessageCircle className="w-5 h-5 mr-2" />
            Book on WhatsApp
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">Book Appointment</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Fill in your details and we'll open WhatsApp to send your request directly to Meenu.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="e.g. Priya Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border-gray-200 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label className="mb-2 block">Interested Services</Label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 border rounded-lg bg-gray-50/50">
              {SERVICES_LIST.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => handleServiceToggle(service)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label
                    htmlFor={service}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Special Requests / Notes</Label>
            <Textarea
              id="notes"
              placeholder="Preferable dates, specific requirements..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="rounded-lg border-gray-200 focus:ring-primary focus:border-primary"
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 rounded-xl text-lg shadow-lg shadow-green-600/20">
            <MessageCircle className="w-5 h-5 mr-2" />
            Proceed to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
