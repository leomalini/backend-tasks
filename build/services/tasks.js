import { db } from "#database";
import { randomUUID } from "crypto";
async function exists(id) {
    return await db.tasks.has(id);
}
async function getTasksById(id) {
    return await db.tasks.get(id);
}
async function getAllTasks() {
    const data = await db.tasks.all();
    return data.map((item) => item.value);
}
async function createTask(data) {
    const createdAt = new Date().toISOString();
    const id = randomUUID();
    const status = "pending";
    const newTask = {
        id,
        ...data,
        createdAt,
        status,
    };
    return await db.tasks.set(id, newTask);
}
async function updateTask(id, data) {
    const task = await getTasksById(id);
    if (!task) {
        throw new Error(`Task with id ${id} not found`);
    }
    const updatedTask = { ...task, ...data };
    await db.tasks.set(id, updatedTask);
    return updatedTask;
}
async function deleteTask(id) {
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
