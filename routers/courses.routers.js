import express from "express";
import * as courseController from "../controllers/courses.controllers.js";


const coursesRouter =express();

coursesRouter.get("/courses", courseController.getAllCourses);

coursesRouter.get("/courses/:id", courseController.getSingleCourse);

coursesRouter.post("/courses", courseController.createCourse);

coursesRouter.put("/courses/:id", courseController.updateCourse);

coursesRouter.delete("/courses/:id", courseController.deleteCourse);

export default coursesRouter;