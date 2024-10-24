# Task Management System Overview

## Project Overview

This repository contains a **Task Management System** built with a full-stack architecture. The project is split into two main parts:

1. **Back-End**: Built with **Node.js**, **Express**, and **TypeScript**, the back-end provides a RESTful API for managing tasks. Tasks can be created, updated, retrieved, and deleted, with data stored in an **SQLite** database. The back-end is secured using **Bearer token authentication**.

2. **Front-End**: The user interface is built with **React** and **TypeScript**, providing a simple, responsive, and user-friendly interface for managing tasks. It interacts with the back-end API to perform CRUD operations and display tasks in a list format.

### Features

- **Full CRUD Operations**: Users can create, view, update, and delete tasks.
- **Authentication**: Basic Bearer token authentication protects the API.
- **Responsive Design**: The front-end is responsive and adapts to mobile and desktop screens.
- **Error Handling**: Both the back-end and front-end provide basic error handling to ensure smooth operation.

## Back-End

For detailed back-end setup instructions, configuration, and API documentation, please refer to the **README** file located in the `backend` directory.

## Front-End

For detailed front-end setup instructions, project structure, and available scripts, please refer to the **README** file located in the `frontend` directory.

## Technologies Used

### Back-End
- **Node.js**: JavaScript runtime for building the server-side API.
- **Express**: Web framework for Node.js, used to create the REST API.
- **TypeScript**: Superset of JavaScript with static types.
- **SQLite**: Lightweight database for storing task data.
- **JWT**: Bearer token authentication for securing the API.

### Front-End
- **React**: JavaScript library for building the user interface.
- **TypeScript**: Superset of JavaScript with static types.
- **Axios**: Promise-based HTTP client for making API requests.

## Contributing

Feel free to submit a pull request or open an issue if you find any bugs or would like to contribute to the project.
