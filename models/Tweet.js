const { mongoose, Schema } = require("../db");

const tweetSchema = new Schema(
  {
    text: String,
    user: String,
    // Agregar la relación del tweet con el usuario.
    // Añadir los likes.
  },
  {
    timestamps: true,
  },
);

const Tweet = mongoose.model("Tweet", tweetSchema); // Entre comillas se coloca el nombre del modelo en mayúscula y en singular.

module.exports = Tweet;
