import { tasksService } from "#services/tasks.js";
import { StatusCodes } from "http-status-codes";
import { notFoundTask } from "./helpers.js";
async function getAll(_req, reply) {
    const tasks = await tasksService.getAll();
    return reply.status(StatusCodes.OK).send({
        message: `Tasks: ${tasks.length}`,
        tasks,
    });
}
async function getById(req, reply) {
    const { id } = req.params;
    const task = await tasksService.getById(id);
    if (!task) {
        return notFoundTask(id, reply);
    }
    return reply.status(StatusCodes.OK).send({
        task,
    });
}
export { getAll as GetAllTasksController, getById as GetByIdController };
