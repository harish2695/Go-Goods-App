import MusicController from "../controllers/music/MusicController";

const express = require('express')
const musicRouter = express.Router()

musicRouter.post(`/api/music/add`,MusicController.addMusic);
musicRouter.get(`/api/music/`,MusicController.getMusic);
musicRouter.post(`/api/music/album`,MusicController.addAlbum);
musicRouter.get(`/api/music/album`,MusicController.getAlbum);


