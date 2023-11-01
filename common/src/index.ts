import { z } from "zod";

export const parsedInput = z.object({
  username: z.string(),
  password: z.string(),
});

// Corrected type inference
export type ParseInputType = z.infer<typeof parsedInput>;
