const { mongoose, Schema } = require("../db");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  description: String,
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  // Añadir foto de perfil del usuario.
  // Añadir listado de tweets del usuario.
});

const User = mongoose.model("User", userSchema); // Entre comillas se coloca el nombre del modelo en mayúscula y en singular.

module.exports = User;
