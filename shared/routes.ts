import { z } from 'zod';
import { insertInquirySchema, type Inquiry } from './schema';

export type { InsertInquiry } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        201: z.custom<Inquiry>(),
        400: errorSchemas.validation,
      },
    },
  },
};
