import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";

// Although the booking is primarily WhatsApp, we might want to log it to DB if needed later.
// For now, we'll keep the structure ready for a real API call if implemented.

export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      // We don't strictly need to fail if the backend isn't ready since this is a WhatsApp first flow,
      // but following the strict guidelines, we implement the fetch.
      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }
      return api.inquiries.create.responses[201].parse(await res.json());
    },
  });
}
