# Node.js Express MongoDB Boilerplate

A simple and robust boilerplate for building RESTful APIs using Node.js, Express.js, and MongoDB. This boilerplate provides a solid foundation for your next project, with a focus on scalability, security, and maintainability.

## Features

*   **RESTful API:** A well-structured and organized API for managing users.
*   **MongoDB Integration:** Uses Mongoose for elegant MongoDB object modeling.
*   **Authentication:** JWT-based authentication for securing your endpoints.
*   **Password Hashing:** Uses bcrypt to hash user passwords before storing them in the database.
*   **Validation:** Joi for request body validation.
*   **CORS:** Enabled for cross-origin resource sharing.
*   **Environment Variables:** Uses dotenv for managing environment variables.
*   **Modular Structure:** A clean and organized project structure for easy maintenance and scalability.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or later)
*   [npm](https://www.npmjs.com/)
*   [MongoDB](https://www.mongodb.com/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/LeoLChalot/Node-Express-Mongo-Boilerplate.git
    ```

2.  **Install dependencies:**

    ```bash
    cd Node-Express-Mongo-Boilerplate
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of your project and add the following variables:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your-jwt-secret
    ```

## Usage

*   **Development mode:**

    ```bash
    npm run dev
    ```

    This will start the server with nodemon, which will automatically restart the server when you make changes to the code.

*   **Production mode:**

    ```bash
    npm start
    ```

    This will start the server in production mode.

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Express controllers
├── loaders/        # Database loaders
├── middlewares/    # Express middlewares
├── models/         # Mongoose models
├── routes/         # Express routes
├── services/       # Business logic
└── utils/          # Utility functions
```

## API Endpoints

All endpoints are prefixed with `/users`.

| Method | Endpoint      | Description          | Authentication |
| ------ | ------------- | -------------------- | -------------- |
| POST   | `/sign-up`    | Register a new user  | No             |
| POST   | `/sign-in`    | Login a user         | No             |
| GET    | `/`           | Get all users        | No             |
| GET    | `/:id`        | Get a user by ID     | No             |
| PUT    | `/:id`        | Update a user by ID  | Yes            |
| DELETE | `/:id`        | Delete a user by ID  | Yes            |

## Dependencies

*   [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
*   [mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.
*   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): An implementation of JSON Web Tokens.
*   [bcrypt](https://github.com/kelektiv/node.bcrypt.js): A library to help you hash passwords.
*   [joi](https://joi.dev/): Object schema description language and validator for JavaScript objects.
*   [dotenv](https://github.com/motdotla/dotenv): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
*   [cors](https://github.com/expressjs/cors): Node.js CORS middleware.
*   [nodemon](https://nodemon.io/): A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## License

This project is licensed under the ISC License.
