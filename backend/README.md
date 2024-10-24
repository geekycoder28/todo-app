
# Back-End (Node.js + TypeScript + Express)

## Project Overview

This is the **back-end** for a simple task management system built with **Node.js**, **Express**, and **TypeScript**. It provides a RESTful API for managing tasks, including creating, updating, deleting, and retrieving tasks from an **SQLite** database. The API is protected with **basic authentication** using a Bearer token.

## Features

- **CRUD operations** for tasks (Create, Read, Update, Delete).
- **Basic authentication** using Bearer token for API protection.
- **SQLite database** for storing task information.
- Written in **TypeScript**.

## Prerequisites

- **Node.js** (v14.x or above)
- **npm** (Node Package Manager)

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run start
   ```

   This will compile the TypeScript code and start the server on port `5000`.

## API Endpoints

- **GET /tasks**: Retrieve a list of all tasks.
- **POST /tasks**: Create a new task (requires `title`, `description`, and `status` in the request body).
- **PUT /tasks/:id**: Update a specific task by ID.
- **DELETE /tasks/:id**: Delete a specific task by ID.

## Authorization

All API requests require a valid Bearer token. In this project, the token is hardcoded in `config.ts`. The token should be sent in the `Authorization` header as follows:

```bash
Authorization: Bearer my-secret-token
```

## Example API Request with Token (using cURL)

```bash
curl -H "Authorization: Bearer my-secret-token" -X GET http://localhost:5000/tasks
```

## Project Structure

```bash
backend/
├── src/
│   ├── controllers/
│   │   └── taskController.ts    # Handles business logic for tasks
│   ├── middlewares/
│   │   └── authMiddleware.ts    # Basic authentication middleware
│   ├── models/
│   │   └── taskModel.ts         # Task database model (SQLite)
│   ├── routes/
│   │   └── taskRoutes.ts        # API routes for tasks
│   ├── config.ts                # Configuration (auth token)
│   └── server.ts                # Main server entry point
├── tsconfig.json                # TypeScript configuration
├── package.json                 # npm configuration
└── package-lock.json
```

## Scripts

- **`npm run start`**: Run the server.
- **`npm run build`**: Compile the TypeScript files.
