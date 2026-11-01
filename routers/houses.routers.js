import express from "express";
import * as housesController from "../controllers/houses.controllers.js";

const housesRouter = express();

housesRouter.get("/houses", housesController.getAllHouses);

housesRouter.get("/houses/:id", housesController.getSingleHouse);

export default housesRouter;
