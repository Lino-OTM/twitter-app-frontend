const Tweet = require("../models/Tweet");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const tweets = await Tweet.find().limit(10).populate("likes").limit(10);
  res.json(tweets);
}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.node
async function store(req, res) {
  await Tweet.create({ text: req.body.text, user: req.auth.sub });
  res.json({ msg: "se creo el tweet" });
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
