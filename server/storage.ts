import { type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemoryStorage implements IStorage {
  private inquiries: Inquiry[] = [];
  private nextId = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      id: this.nextId++,
      name: insertInquiry.name,
      services: insertInquiry.services || null,
      notes: insertInquiry.notes || null,
      createdAt: new Date(),
    };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = new MemoryStorage();
