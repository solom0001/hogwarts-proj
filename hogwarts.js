import * as housesRepository from "./repositories/houses.repository.js";
import * as studentRepository from "./repositories/students.repository.js";

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

//--------- HOUSES BACKEND -------------/

app.get("/houses", async (req, res) => {
  try {
    const result = await housesRepository.getAllHouses();
    // console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

app.get("/houses/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await housesRepository.getSingleHouse(id);
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

//--------- STUDENTS BACKEND -------------/

app.get("/students", async (req, res) => {
  try {
    const students = await studentRepository.getAllStudents();
    // console.log(result);
    if (students) {
      res.status(200).json(students);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentRepository.getSingleStudent(id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

app.post("/students", async (req, res) => {
  try {
    const name = "Ron Weasley";
    const start_yr = 2014;
    const house = 2;

    const student = await studentRepository.createStudent(name, house, start_yr);
    if (student) {
      res.status(200).json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const name = "Brock Lesnar";
    const start_yr = 2013;
    const house = 3;
    const id = req.params.id;

    const student = await studentRepository.updateStudent(name, house, start_yr, id);

    if (student) {
      console.log(student);

      res.status(200).json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const student = await studentRepository.deleteStudent(id);

    if (student) {
      res.status(204).send();
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});
