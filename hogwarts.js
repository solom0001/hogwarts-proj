
import housesRouter from "./routers/houses.routers.js";
import studentsRouter from "./routers/students.routers.js";
import coursesRouter from "./routers/courses.routers.js";
import teachersRouter from "./routers/teachers.routers.js";

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


app.use(housesRouter);
app.use(studentsRouter);
app.use(coursesRouter);
app.use(teachersRouter);

