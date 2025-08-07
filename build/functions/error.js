import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
function handler(error, _, reply) {
    if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
        }));
        return reply
            .status(StatusCodes.BAD_REQUEST)
            .send({ status: "Validation error", errors });
    }
}
export { handler as ErrorHandler };
