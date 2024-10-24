import React, { useState, useEffect } from 'react';
import { fetchTasks, addTask, updateTask, deleteTask, Task } from '../services/api';
import './TaskList.css';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({ title: '', description: '', status: 'pending' });
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all tasks (or filtered tasks based on status)
  useEffect(() => {
    fetchAllTasks();
  }, [filterStatus]);

  // Fetch tasks from the API
  const fetchAllTasks = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors
    try {
      const response = await fetchTasks(filterStatus);
      setTasks(response.data.tasks);
    } catch (error) {
      setError('Failed to load tasks');
    }
    setLoading(false);
  };

  // Handle form input change for creating a new task
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new task by calling the API
  const addNewTask = async () => {
    if (!newTask.title || !newTask.description) {
      setError('Please provide both a title and description');
      return;
    }
    try {
      await addTask(newTask);
      fetchAllTasks(); // Refresh the task list
      setNewTask({ title: '', description: '', status: 'pending' }); // Reset the form
    } catch (error) {
      setError('Failed to add task');
    }
  };

  // Toggle task status (pending <-> completed)
  const toggleStatus = async (task: Task) => {
    try {
      await updateTask(task.id!, { ...task, status: task.status === 'pending' ? 'completed' : 'pending' });
      fetchAllTasks(); // Refresh the task list
    } catch (error) {
      setError('Failed to update task');
    }
  };

  // Delete a task by calling the API
  const removeTask = async (id: number) => {
    try {
      await deleteTask(id);
      fetchAllTasks(); // Refresh the task list
    } catch (error) {
      setError('Failed to delete task');
    }
  };

  return (
    <div className="task-container">
      <h1>Task Manager</h1>

      {/* Display error message if any */}
      {error && <div className="error-message">{error}</div>}

      {/* Form for creating new tasks */}
      <div className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleChange}
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>

      {/* Filter tasks by status */}
      <div className="filter">
        <label>Filter by Status: </label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Loading spinner/message while tasks are being fetched */}
      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : (
        <ul className="task-list">
          {/* Display each task in the list */}
          {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.status}`}>
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
              </div>
              <div className="task-actions">
                {/* Toggle status button */}
                <button onClick={() => toggleStatus(task)}>
                  {task.status === 'pending' ? 'Mark as Completed' : 'Mark as Pending'}
                </button>
                {/* Delete task button */}
                <button onClick={() => removeTask(task.id!)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
