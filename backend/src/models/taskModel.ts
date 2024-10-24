import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');

// Initialize the database
db.serialize(() => {
  db.run("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, description TEXT, status TEXT)");
});

type Task = {
  id?: number;
  title: string;
  description: string;
  status: string;
};

type Callback = (err: Error | null, result?: any) => void;

// Get all tasks
export const getAllTasks = (callback: Callback) => {
  db.all("SELECT * FROM tasks", [], callback);
};

// Create a new task
export const createTask = (task: Task, callback: Callback) => {
  const { title, description, status } = task;
  db.run("INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)", [title, description, status], function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { id: this.lastID, ...task });
    }
  });
};

// Update a task
export const updateTask = (id: number, task: Task, callback: Callback) => {
  const { title, description, status } = task;
  db.run("UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?", [title, description, status, id], function (err) {
    callback(err);
  });
};

// Delete a task
export const deleteTask = (id: number, callback: Callback) => {
  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    callback(err);
  });
};

// Filter tasks by status
export const filterTasksByStatus = (status: string, callback: Callback) => {
  db.all("SELECT * FROM tasks WHERE status = ?", [status], callback);
};
