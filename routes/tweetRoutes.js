const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");
const { expressjwt: checkJwt } = require("express-jwt");

/*
 * API endpoints relacionados a los artículos.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/articles",
 * tal como se definió en el archivo `routes/index.js`.
 */

router.get("/", tweetController.index);
router.use(checkJwt({ secret: process.env.SECRET_JWT, algorithms: ["HS256"] }));
router.post("/", tweetController.store);
router.get("/:id", tweetController.show);
router.patch("/:id/likes", tweetController.update);
router.delete("/:id", tweetController.destroy);

module.exports = router;
