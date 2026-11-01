import * as studentRepository from "../repositories/students.repository.js";

export const getAllStudents = async (req, res) => {
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
};

export const getSingleStudent = async (req, res) => {
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
};

export const createStudent = async (req, res) => {
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
};

export const updateStudent = async (req, res) => {
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
};

export const deleteStudent = async (req, res) => {
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
};
