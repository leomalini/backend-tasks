import { defineRoutes } from "#functions/utils.js";
import { CreateTaskController } from "@/controllers/tasks/create.js";
export default defineRoutes((app) => {
    app.post("/", CreateTaskController);
});
