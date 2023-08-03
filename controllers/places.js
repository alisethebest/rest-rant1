const places = require("express").Router();
const places = require("../models/places.js");
places.get("/", (req, res) => {
  res.render("places/Index", { places });
});

places.get("/new", (req, res) => {
  res.render("places/New");
});

places.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image i one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");

  res.send(200);
});

module.exports = places;
