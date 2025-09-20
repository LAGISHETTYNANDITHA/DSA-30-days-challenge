# EventMate Backend Documentation

## Overview
EventMate is an event management and ticket booking application built using JavaScript, MongoDB, React, Express, and Node.js. This document provides instructions for setting up and running the backend of the application.

## Step-by-step guide to run the backend:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd eventmate-app
   ```

2. **Set up the backend**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up the MongoDB connection in `src/config/db.js` with your MongoDB URI.
   - Start the backend server:
     ```bash
     npm start
     ```

## API Endpoints

### Events
- **GET /api/events**: Retrieve all events.
- **POST /api/events**: Create a new event.
- **PUT /api/events/:id**: Update an existing event.
- **DELETE /api/events/:id**: Delete an event.

### Bookings
- **GET /api/bookings**: Retrieve all bookings.
- **POST /api/bookings**: Create a new booking.
- **PUT /api/bookings/:id**: Update an existing booking.
- **DELETE /api/bookings/:id**: Delete a booking.

## Necessary requirements:
- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud) for the database.
- Basic knowledge of JavaScript, React, and Express.

## License
This project is licensed under the MIT License.