
# Front-End (React + TypeScript)

## Project Overview

This is the **front-end** of the task management system built with **React** and **TypeScript**. It interacts with the back-end API to allow users to:

- Create new tasks.
- View all tasks.
- Update the status of tasks (pending/completed).
- Delete tasks.

## Features

- Form to create new tasks.
- List view to display all tasks.
- Buttons to update or delete tasks.
- **Basic error handling** for API requests.
- Written in **TypeScript**.

## Prerequisites

- **Node.js** (v14.x or above)
- **npm** (Node Package Manager)

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone git@github.com:geekycoder28/todo-app.git
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

   This will start the development server on port `3000`.

## Project Structure

```bash
frontend/
├── src/
│   ├── components/
│   │   └── TaskList.tsx         # Main task list component
│   └── services/
│       └── api.ts               # API service to interact with back-end
├── public/
├── package.json                 # npm configuration
└── package-lock.json
```

## Scripts

- **`npm start`**: Start the development server.
- **`npm run build`**: Build the project for production.
