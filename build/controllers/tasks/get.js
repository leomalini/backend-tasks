import { tasksService } from "#services/tasks.js";
import { StatusCodes } from "http-status-codes";
async function getAll(_req, reply) {
    const tasks = await tasksService.getAll();
    return reply.status(StatusCodes.OK).send({
        message: `Tasks: ${tasks.length}`,
        tasks,
    });
}
export { getAll as GetAllTasksController };
