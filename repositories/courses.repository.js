import pool from "../db.js";

export async function getAllCourses() {
  const courses = await pool.query(`
SELECT c.id, c.course_name, t.teacher_name
FROM courses c
LEFT JOIN teachers t ON c.teacher_id = t.id
ORDER BY c.id;
`);
  if (courses) {
    return courses.rows;
  } else {
    return null;
  }
}

///// TODO: Needa edit these functions to return more uniform data

export async function getSingleCourse(id) {
  const one = await pool.query(
    `SELECT c.id, c.course_name, t.teacher_name
FROM courses c
LEFT JOIN teachers t ON c.teacher_id = t.id
WHERE c.id = $1;`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function createCourse(c_name, t_id) {
  const one = await pool.query(
    `INSERT INTO public.courses
        (course_name, teacher_id)
       VALUES ($1, $2)
       RETURNING id, course_name, teacher_id;`,
    [c_name, t_id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function updateCourse(c_name, t_id, id) {
  const one = await pool.query(
    `UPDATE public.courses
        SET course_name =$1 ,teacher_id =$2
        WHERE id = $3
       RETURNING id, course_name, teacher_id;`,
    [c_name, t_id, id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function deleteCourse(id) {
  const one = await pool.query(
    `DELETE FROM public.courses
        WHERE id = $1
       RETURNING id`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}
