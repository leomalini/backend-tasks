import { db } from "#database";
import {
  CreateTaskSchema,
  TaskStatus,
  UpdateTaskSchema,
} from "#schemas/tasks.js";

async function exists(id: string) {
  return await db.tasks.has(id);
}

async function getTasksById(id: string) {
  return await db.tasks.get(id);
}

async function getAllTasks() {
  const data = await db.tasks.all();
  return data.map((item) => item.value);
}

async function createTask(data: CreateTaskSchema) {
  const createdAt = new Date();
  const id = createdAt.getTime().toString();
  const status: TaskStatus = "pending";

  return await db.tasks.set(id, { ...data, createdAt, status, id });
}

async function updateTask(id: string, data: UpdateTaskSchema) {
  const task = await getTasksById(id);

  return await db.tasks.set(id, { ...task, ...data });
}

async function deleteTask(id: string) {
  return await db.tasks.delete(id);
}

export const tasksService = {
  exists,
  getById: getTasksById,
  getAll: getAllTasks,
  create: createTask,
  update: updateTask,
  delete: deleteTask,
};
