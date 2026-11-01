import express from "express";
import * as studentController from "../controllers/students.controllers.js";


const studentsRouter =express();

studentsRouter.get("/students", studentController.getAllStudents);

studentsRouter.get("/students/:id", studentController.getSingleStudent);

studentsRouter.post("/students", studentController.createStudent);

studentsRouter.put("/students/:id", studentController.updateStudent);

studentsRouter.delete("/students/:id", studentController.deleteStudent);

export default studentsRouter;