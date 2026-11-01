import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
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
};

export const getSingleHouse = async (req, res) => {
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
};
