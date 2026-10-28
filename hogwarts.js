import * as housesController from "./controllers/houses.controllers.js";
import * as studentController from "./controllers/students.controllers.js";
import * as teacherController from "./controllers/teachers.controllers.js";
import * as coursesController from "./controllers/courses.controllers.js";

import express from "express";

// const pool = require("./db");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse JSON bodies   ​

app.get("/", (req, res) => {
  res.send("Hello Hogwarts!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//--------- HOUSES -------------/

app.get("/houses", housesController.getAllHouses);

app.get("/houses/:id", housesController.getSingleHouse);

//--------- STUDENTS -------------/

app.get("/students", studentController.getAllStudents);

app.get("/students/:id", studentController.getSingleStudent);

app.post("/students", studentController.createStudent);

app.put("/students/:id", studentController.updateStudent);

app.delete("/students/:id", studentController.deleteStudent);

//--------- TEACHERS -------------/

app.get("/teachers", teacherController.getAllTeachers);

app.get("/teachers/:id", teacherController.getSingleTeacher);

app.post("/teachers", teacherController.createTeacher);

app.put("/teachers/:id", teacherController.updateTeacher);

app.delete("/teachers/:id", teacherController.deleteTeacher);

//--------- COURSES -------------/

app.get("/courses", coursesController.getAllCourses);

app.get("/courses/:id", coursesController.getSingleCourse);

app.post("/courses", coursesController.createCourse);

app.put("/courses/:id", coursesController.updateCourse);

app.delete("/courses/:id", coursesController.deleteCourse);
