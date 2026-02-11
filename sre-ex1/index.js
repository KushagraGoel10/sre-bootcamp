const express = require("express");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3000;

//for logging-
const morgan = require("morgan");
const pinoHttp = require("pino-http");


// Middleware to parse JSON
app.use(express.json());

//Basic logging -

// app.use((req, res, next) => {
//   const start = Date.now();

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     console.log(
//       `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`
//     );
//   });

//   next();
// });

//logging using morgan
app.use(morgan("combined"));


//app.use(pinoHttp()); //too much details


// Healthcheck (VERY important for SRE)
app.get("/healthcheck", (req, res) => {
  res.status(200).json({ status: "ok" });
});

//Temp data
let students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Get all students
app.get("/api/v1/students", (req, res) => {
  res.json(students);
});

// Get student by ID
app.get("/api/v1/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
});

// Add a student
app.post("/api/v1/students", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newStudent = {
    id: students.length + 1,
    name
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});


//update a student's data -
app.put ("/api/v1/students/:id", (req,res) =>{

    const id = parseInt (req.params.id);
    const {name} = req.body;

    const student = students.find(s => s.id === id);

     if (!student) {
    return res.status(404).json({ error: "Student not found" });
    }

    if (!name) {
        return res.status(400).json ({error: "Name is required"});
    }

    student.name = name ; 
    res.json(student);

});

//delete a students record - 
app.delete("/api/v1/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  students.splice(index, 1);
  res.status(204).send();
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
