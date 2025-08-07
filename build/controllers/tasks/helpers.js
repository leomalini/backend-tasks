import { StatusCodes } from "http-status-codes";
export function notFoundTask(id, reply) {
    return reply.status(StatusCodes.NOT_FOUND).send({
        message: `Task with id ${id} not found`,
    });
}
