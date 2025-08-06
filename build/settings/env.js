import { z } from "zod";
export const envSchema = z.object({
    PORT: z.coerce.number().optional(),
});
const parsedEnv = envSchema.parse(process.env);
process.env = Object.create({ ...process.env, ...parsedEnv });
