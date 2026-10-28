import * as teachersRepository from "../repositories/teachers.repository.js";

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teachersRepository.getAllTeachers();
    // console.log(result);
    if (teachers) {
      res.status(200).json(teachers);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const getSingleTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const teacher = await teachersRepository.getSingleTeacher(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const name = "Albus Dumbledore";
    const house = 2;

    const teacher = await teachersRepository.createTeacher(name, house);
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const name = "Mike Tyson";
    const house = 1;
    const id = req.params.id;

    const teacher = await teachersRepository.updateTeacher(name, house, id);

    if (teacher) {
      console.log(teacher);

      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const id = req.params.id;

    const teacher = await teachersRepository.deleteTeacher(id);

    if (teacher) {
      res.status(204).send();
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};
