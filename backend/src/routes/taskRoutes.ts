import { Router } from 'express';
import { getTasks, createNewTask, updateExistingTask, deleteTaskById } from '../controllers/taskController';

const router = Router();

router.get('/', getTasks);                  // Get all tasks
router.post('/', createNewTask);            // Create a new task
router.put('/:id', updateExistingTask);      // Update a task
router.delete('/:id', deleteTaskById);       // Delete a task

export default router;
