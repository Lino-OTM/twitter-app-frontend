const { mongoose, Schema } = require("../db");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  description: String,
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  image: String,
});

const User = mongoose.model("User", userSchema); // Entre comillas se coloca el nombre del modelo en mayúscula y en singular.

module.exports = User;
