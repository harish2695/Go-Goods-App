import AlienController from "../controllers/AlienController";
import MusicController from "../controllers/music/MusicController";
import alienRouter from "../routes/alienRouter";

export default (app:any) => {

    // POST ROUTES
    app.get(`/api/post`,AlienController.getAll);
    app.post(`/api/post`,AlienController.add);
    app.post(`/api/music/add`,MusicController.addMusic);
    app.get(`/api/music/`,MusicController.getMusic);
    app.post(`/api/music/album`,MusicController.addAlbum);
    app.get(`/api/music/album`,MusicController.getAlbum);
   
    
    //forwarding to alien router
    app.use("/",alienRouter)
  }