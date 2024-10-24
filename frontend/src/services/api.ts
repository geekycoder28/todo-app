import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';
const AUTH_TOKEN = 'my-secret-token'; // Replace this with the actual token or retrieve it dynamically

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: 'pending' | 'completed';
}

// Setup the axios instance with token
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const fetchTasks = (status?: string) => {
  const url = status ? `?status=${status}` : '/';
  return axiosInstance.get<{ tasks: Task[] }>(url);
};

export const addTask = (task: Task) => {
  return axiosInstance.post<{ task: Task }>('/', task);
};

export const updateTask = (id: number, task: Task) => {
  return axiosInstance.put(`/${id}`, task);
};

export const deleteTask = (id: number) => {
  return axiosInstance.delete(`/${id}`);
};
