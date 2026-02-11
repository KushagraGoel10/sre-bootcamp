const express = require("express");
const router = express.Router();
const service = require("../services/studentService");

// For getting all students
router.get("/", (req, res) => {
  res.json(service.getAllStudents());
});

// student by id
router.get("/:id", (req, res) => {
  const student = service.getStudentById(parseInt(req.params.id));

  if (!student)
    return res.status(404).json({ error: "Student not found" });

  res.json(student);
});

//adding a new student
router.post("/", (req, res) => {
  if (!req.body.name)
    return res.status(400).json({ error: "Name is required" });

  const student = service.createStudent(req.body.name);
  res.status(201).json(student);
});

//updating existing student
router.put("/:id", (req, res) => {
  const student = service.updateStudent(
    parseInt(req.params.id),
    req.body.name
  );

  if (!student)
    return res.status(404).json({ error: "Student not found" });

  res.json(student);
});

//deleting a student
router.delete("/:id", (req, res) => {
  const deleted = service.deleteStudent(parseInt(req.params.id));

  if (!deleted)
    return res.status(404).json({ error: "Student not found" });

  res.status(204).send();
});

module.exports = router;
