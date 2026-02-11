# Student CRUD REST API

A simple REST API built with **Node.js** and **Express** that supports CRUD operations for managing students.

This project follows REST best practices such as API versioning, structured routing, logging, and environment-based configuration.

---

## Features

- Create, Read, Update, Delete students
- API Versioning (`/api/v1/students`)
- Healthcheck endpoint
- Logging with Morgan
- Environment variable configuration

---

## Tech Stack

- Node.js
- Express
- Morgan
- dotenv

---

## Project Structure

## API Endpoints - APIS tested in postman 
GET	/healthcheck	 - Check service health
GET	/api/v1/students -	Get all students   - http://localhost:3000/api/v1/students
GET	/api/v1/students/:id -	Get student by ID - http://localhost:3000/api/v1/students/2
POST	/api/v1/students -	Create student - http://localhost:3000/api/v1/students  with adding name : " xyz " to the raw body in postman
PUT	/api/v1/students/:id -	Update student - http://localhost:3000/api/v1/students/3 with adding name : " xyz xyz " to the raw body in postman
DELETE	/api/v1/students/:id -	Delete student  - http://localhost:3000/api/v1/students/2 
