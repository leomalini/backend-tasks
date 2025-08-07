import { defineRoutes } from "#functions/utils.js";
import { tasksService } from "#services/tasks.js";
import { StatusCodes } from "http-status-codes";
export default defineRoutes((app) => {
    // Temporary migration endpoint
    app.post("/migrate", async (_req, reply) => {
        try {
            await tasksService.migrateOldTasks();
            return reply.status(StatusCodes.OK).send({
                message: "Migration completed successfully",
            });
        }
        catch (error) {
            return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                message: "Migration failed",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    });
});
