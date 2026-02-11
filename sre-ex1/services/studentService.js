let students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

exports.getAllStudents = () => students;

exports.getStudentById = (id) =>
  students.find(s => s.id === id);

exports.createStudent = (name) => {
  const student = {
    id: students.length + 1,
    name
  };

  students.push(student);
  return student;
};

exports.updateStudent = (id, name) => {
  const student = students.find(s => s.id === id);
  if (!student) return null;

  student.name = name;
  return student;
};

exports.deleteStudent = (id) => {
  const index = students.findIndex(s => s.id === id);
  if (index === -1) return false;

  students.splice(index, 1);
  return true;
};
