import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    let completed = undefined;
    if (req.query.completed !== undefined) {
      completed = req.query.completed === 'true';
    }

    const tasks = await taskService.getAllTasks(completed);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}