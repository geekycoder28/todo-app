import { Request, Response } from 'express';
import { getAllTasks, createTask, updateTask, deleteTask, filterTasksByStatus } from '../models/taskModel';

// Retrieve all tasks or filter by status
export const getTasks = (req: Request, res: Response) => {
  const { status } = req.query;
  if (status) {
    filterTasksByStatus(status as string, (err, tasks) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ tasks });
      }
    });
  } else {
    getAllTasks((err, tasks) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ tasks });
      }
    });
  }
};

// Create a new task
export const createNewTask = (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  createTask({ title, description, status }, (err, task) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ task });
    }
  });
};

// Update a task by ID
export const updateExistingTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, description, status } = req.body;
  updateTask(id, { title, description, status }, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Task updated successfully' });
    }
  });
};

// Delete a task by ID
export const deleteTaskById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  deleteTask(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Task deleted successfully' });
    }
  });
};
