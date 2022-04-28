import mongoose, { Schema } from "mongoose";

class Post {

  initSchema() {
    const schema = new Schema({
      title: {
        type: String,
        required: true,
      },
      slug: String,
      subtitle: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      content: {
        type: String,
        required: true,
      }
    });
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("posts");
  }
}

export default Post;
