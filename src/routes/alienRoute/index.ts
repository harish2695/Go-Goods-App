import AlienController from "../../controllers/AlienController";

const express = require('express')
const alienRoute = express.Router()

alienRoute.get(`/post/:id`,AlienController.getAll);
alienRoute.post(`/post`,AlienController.add);

export default alienRoute;

