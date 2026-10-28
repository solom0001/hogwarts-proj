import * as coursesRepository from "../repositories/courses.repository.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await coursesRepository.getAllCourses();
    // console.log(result);
    if (courses) {
      res.status(200).json(courses);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const getSingleCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await coursesRepository.getSingleCourse(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const createCourse = async (req, res) => {
  try {
    const name = "Quidditch";
    const teacher = 2;

    const course = await coursesRepository.createCourse(name, teacher);
    if (course) {
      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const name = "Spell casting";
    const teacher = 3;
    const id = req.params.id;

    const course = await coursesRepository.updateCourse(name, teacher, id);

    if (course) {
      console.log(course);

      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;

    const course = await coursesRepository.deleteCourse(id);

    if (course) {
      res.status(204).send();
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};
