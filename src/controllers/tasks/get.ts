import { tasksService } from "#services/tasks.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";
import { notFoundTask } from "./helpers.js";

async function getAll(_req: FastifyRequest, reply: FastifyReply) {
  const tasks = await tasksService.getAll();

  return reply.status(StatusCodes.OK).send({
    message: `Tasks: ${tasks.length}`,
    tasks,
  });
}

interface GetByIdRoute {
  Params: {
    id: string;
  };
}

async function getById(req: FastifyRequest<GetByIdRoute>, reply: FastifyReply) {
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
