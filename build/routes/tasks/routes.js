import { defineRoutes } from "#functions/utils.js";
import { CreateTaskController } from "@/controllers/tasks/create.js";
import { GetAllTasksController } from "@/controllers/tasks/get.js";
export default defineRoutes((app) => {
    app.get("/", GetAllTasksController);
    app.post("/", CreateTaskController);
});
