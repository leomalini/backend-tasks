import { defineRoutes } from "#functions/utils.js";
import { StatusCodes } from "http-status-codes";

export default defineRoutes((app) => {
  app.get("/", async (_req, reply) => {
    reply.status(StatusCodes.OK).send({
      message: "Welcome to the home page!",
      timestamp: new Date().toISOString(),
    });
  });
});
