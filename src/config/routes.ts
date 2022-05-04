import AlienController from "../controllers/AlienController";
import MusicController from "../controllers/music/MusicController";
import alienRouter from "../routes/alienRouter";
import {Application} from "express";
import alienRoute from "../routes/alienRoute";
// const server = express();

export default (app: Application) => {

    // POST ROUTES

    // app.get(`/api/post/:id`,AlienController.getAll);
    // app.post(`/api/post`,AlienController.add);
    app.post(`/api/music/add`,MusicController.addMusic);
    app.get(`/api/music/`,MusicController.getMusic);
    app.post(`/api/music/album`,MusicController.addAlbum);
    app.get(`/api/music/album`,MusicController.getAlbum);
   
    
    //forwarding to alien router
    app.use("/",alienRouter)
    app.use(`/api`,alienRoute)
  }