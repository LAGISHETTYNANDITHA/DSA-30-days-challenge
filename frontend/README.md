# EventMate - Event Management & Ticket Booking Application

## Overview
EventMate is a full-stack application built using JavaScript, MongoDB, React, Express, and Node.js. It allows users to create, read, update, and delete events and bookings.

## Features
- Create, read, update, and delete events.
- Create, read, update, and delete bookings.
- User-friendly interface for managing events and bookings.

## Step-by-step guide to run the application:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd eventmate-app
   ```

2. **Set up the backend**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Set up the MongoDB connection in `src/config/db.js` with your MongoDB URI.
   - Start the backend server:
     ```
     npm start
     ```

3. **Set up the frontend**:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

4. **Access the application**:
   Open your browser and go to `http://localhost:3000` to view the application.

## Necessary requirements:
- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud) for the database.
- Basic knowledge of JavaScript, React, and Express.

## License
This project is licensed under the MIT License.