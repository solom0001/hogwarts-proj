import pool from "../db.js";

export async function getAllStudents() {
  const students = await pool.query(`SELECT s.id, s.student_name, h.house_name, c.course_name
FROM students s
LEFT JOIN houses h ON h.id = s.house_id
LEFT JOIN student_courses_ft sc ON sc.student_id = s.id
LEFT JOIN courses c ON c.id = sc.course_id
ORDER BY s.id;`);
  if (students) {
    return students.rows;
  } else {
    return null;
  }
}

///// TODO: Needa edit these functions to return more uniform data

export async function getSingleStudent(id) {
  const one = await pool.query(
    `SELECT s.id, s.student_name, h.house_name, c.course_name
    FROM students s
    LEFT JOIN houses h ON h.id = s.house_id
    LEFT JOIN student_courses_ft sc ON sc.student_id = s.id
    LEFT JOIN courses c ON c.id = sc.course_id
    WHERE s.id = $1
ORDER BY s.id;`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows;
  }
}

export async function createStudent(s_name, h_id, start_yr) {
  const one = await pool.query(
    `INSERT INTO public.students
        (student_name, house_id, start_year)
       VALUES ($1, $2, $3)
       RETURNING id, student_name, house_id, start_year;`,
    [s_name, h_id, start_yr],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function updateStudent(s_name, h_id, start_yr, id) {
  const one = await pool.query(
    `UPDATE public.students
        SET student_name =$1 ,house_id =$2 , start_year =$3
        WHERE id = $4
       RETURNING id, student_name, house_id, start_year;`,
    [s_name, h_id, start_yr, id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function deleteStudent(id) {
  const one = await pool.query(
    `DELETE FROM public.students
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
