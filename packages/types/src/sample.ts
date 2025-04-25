import { z } from 'zod';

export const SampleSchema = z.object({
  testing: z.boolean(),
});

export type Sample = z.infer<typeof SampleSchema>;
