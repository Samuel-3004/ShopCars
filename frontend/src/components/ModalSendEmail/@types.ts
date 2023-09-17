import { z } from "zod";

export const SendEmailSchema = z.object({
  email: z.string().email().nonempty(),
});

export type ResetEmailData = z.infer<typeof SendEmailSchema>;
