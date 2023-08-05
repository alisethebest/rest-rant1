const places = require("express").Router();

const placeData = [
  // Rename 'places' to 'placeData'
  {
    name: "Chick-fil-a",
    city: "Los Angles",
    state: "CA",
    cuisines: "fast-food-restaurant",
    pic: "/images/chick-fil-a.png",
  },
  {
    name: "In-N-Out",
    city: "La Verne",
    state: "CA",
    cuisines: "American-fast-food",
    pic: "/images/in-n-out.png",
  },
];

places.get("/", (req, res) => {
  res.render("places/index", { places: placeData }); // Pass placeData here
});

places.get("/new", (req, res) => {
  res.render("places/New");
});

places.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id] });
  }
});




places.post("/", (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  placeData.push(req.body); // Use 'placeData' here
  res.redirect("/places");
});

module.exports = places;
