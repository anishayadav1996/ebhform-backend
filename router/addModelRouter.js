import express from "express";
import { addModel, OtherIndividuals, ParentGuardian, photographer} from "../controller/FormController.js";


const addModelRouter = express.Router();

//============ Route for adding a blog ================
addModelRouter.post('/add-model',  addModel)
              .post('/add-individuals',  OtherIndividuals)
              .post('/add-parents',  ParentGuardian)
              .post('/add-photographer',  photographer);


export default addModelRouter