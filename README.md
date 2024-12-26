# My MERN App

This is a full-stack MERN application that connects to MongoDB Atlas. The application consists of a backend built with Express and Mongoose, and a frontend built with React and Material-UI.

## Project Structure

```
my-mern-app
├── backend
│   ├── src
│   │   ├── controllers       # Business logic for routes
│   │   ├── models            # Mongoose schemas
│   │   │   └── schema1.js    # First schema
│   │   │   └── schema2.js    # Second schema
│   │   ├── routes            # API endpoints
│   │   ├── app.js            # Entry point for backend
│   │   └── config
│   │       └── db.js         # MongoDB Atlas connection
│   ├── package.json          # Backend dependencies and scripts
│   └── README.md             # Backend documentation
├── frontend
│   ├── public                # Static files
│   ├── src
│   │   ├── components        # React components
│   │   ├── App.js            # Main React component
│   │   ├── index.js          # Entry point for frontend
│   │   └── material-ui-theme.js # Material-UI theme
│   ├── package.json          # Frontend dependencies and scripts
│   └── README.md             # Frontend documentation
├── .gitignore                # Git ignore file
└── README.md                 # General project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-mern-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The frontend will be accessible at `http://localhost:5050`.

## Features

- Full-stack MERN application
- MongoDB Atlas integration
- Material-UI for frontend styling

## License

This project is licensed under the MIT License.