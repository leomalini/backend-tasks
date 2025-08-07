import { defineRoutes } from "#functions/utils.js";
import { CreateTaskController } from "@/controllers/tasks/create.js";
import { DeleteTaskController } from "@/controllers/tasks/delete.js";
import {
  GetAllTasksController,
  GetByIdController,
} from "@/controllers/tasks/get.js";
import { UpdateTaskController } from "@/controllers/tasks/update.js";

export default defineRoutes((app) => {
  app.get("/", GetAllTasksController);
  app.get("/:id", GetByIdController);

  app.patch("/:id", UpdateTaskController);
  app.delete("/:id", DeleteTaskController);

  app.post("/", CreateTaskController);
});
