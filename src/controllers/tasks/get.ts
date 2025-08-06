import { tasksService } from "#services/tasks.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";

async function getAll(_req: FastifyRequest, reply: FastifyReply) {
  const tasks = await tasksService.getAll();

  return reply.status(StatusCodes.OK).send({
    message: `Tasks: ${tasks.length}`,
    tasks,
  });
}

export { getAll as GetAllTasksController };
