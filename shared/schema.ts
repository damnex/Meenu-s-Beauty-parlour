import { z } from "zod";

export interface Inquiry {
  id: number;
  name: string;
  services: string[] | null;
  notes: string | null;
  createdAt: Date;
}

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  services: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
