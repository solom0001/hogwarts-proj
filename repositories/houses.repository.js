import pool from "../db.js";

export async function getAllHouses() {
  const houses = await pool.query("SELECT * FROM public.houses");
  if (houses) {
    return houses.rows;
  } else {
    return null;
  }
}

export async function getSingleHouse(id) {
  const one = await pool.query("SELECT * FROM public.houses WHERE id = $1", [id]);
  if (one.rowCount===0) {
      return null;
} else {
    return one.rows[0]; //Det er så man får tilbage den første obj ind i listen og ikke hele listen/row
  }
}

export async function createSingleHouse(id) {
  const one = await pool.query("SELECT * FROM public.houses WHERE id = $1", [id]);
  if (one) {
    return one.rows[0]; 
  } else {
    return null;
  }
}
