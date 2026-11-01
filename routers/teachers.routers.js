import express from "express";
import * as teacherController from "../controllers/teachers.controllers.js";

const teachersRouter = express();

teachersRouter.get("/teachers", teacherController.getAllTeachers);

teachersRouter.get("/teachers/:id", teacherController.getSingleTeacher);

teachersRouter.post("/teachers", teacherController.createTeacher);

teachersRouter.put("/teachers/:id", teacherController.updateTeacher);

teachersRouter.delete("/teachers/:id", teacherController.deleteTeacher);

export default teachersRouter;
