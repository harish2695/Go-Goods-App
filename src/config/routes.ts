import AlienController from "../controllers/AlienController";

export default (app:any) => {

    // POST ROUTES
    app.get(`/api/post`,AlienController.getAll);
    app.post(`/api/post`,AlienController.add);

  }