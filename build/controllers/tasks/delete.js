import { tasksService } from "#services/tasks.js";
import { StatusCodes } from "http-status-codes";
import { notFoundTask } from "./helpers.js";
async function controller(req, reply) {
    const { id } = req.params;
    const exists = await tasksService.exists(id);
    if (!exists) {
        return notFoundTask(id, reply);
    }
    await tasksService.delete(id);
    return reply.status(StatusCodes.OK).send({
        message: "Task deleted successfully",
    });
}
export { controller as DeleteTaskController };
