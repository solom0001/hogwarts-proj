import pool from "../db.js";

export async function getAllTeachers() {
  const teachers = await pool.query(`
SELECT t.id, t.teacher_name,h.house_name,c.course_name
FROM teachers t
LEFT JOIN courses c ON t.id = c.teacher_id
LEFT JOIN houses h ON h.id = t.house_id
ORDER BY t.id;
`);
  if (teachers) {
    return teachers.rows;
  } else {
    return null;
  }
}

///// TODO: Needa edit these functions to return more uniform data

export async function getSingleTeacher(id) {
  const one = await pool.query(
    `SELECT t.id, t.teacher_name,h.house_name,c.course_name
FROM teachers t
LEFT JOIN courses c ON t.id = c.teacher_id
LEFT JOIN houses h ON h.id = t.house_id
WHERE t.id = $1;`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function createTeacher(t_name, h_id) {
  const one = await pool.query(
    `INSERT INTO public.teachers
        (teacher_name, house_id)
       VALUES ($1, $2)
       RETURNING id, teacher_name, house_id;`,
    [t_name, h_id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function updateTeacher(t_name, h_id, id) {
  const one = await pool.query(
    `UPDATE public.teachers
        SET teachers_name =$1 ,house_id =$2
        WHERE id = $3
       RETURNING id, student_name, house_id;`,
    [t_name, h_id, id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function deleteTeacher(id) {
  const one = await pool.query(
    `DELETE FROM public.teachers
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
