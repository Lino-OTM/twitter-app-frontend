const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function getToken(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ msg: "verifque credenciales 1..." });

  const match = req.body.password === user.password;
  if (!match) return res.json({ msg: "verifique credenciales 2..." });
  const token = jwt.sign({ sub: user.id }, process.env.SECRET_JWT);
  res.json(token);
}

module.exports = { getToken };
