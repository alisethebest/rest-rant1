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
  } else if (!placeData[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: placeData[id], id: id });
  }
});

places.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log("Received ID:", id);
  if (isNaN(id)) {
    console.log("ID is not a number");
    res.render("error404");
  } else if (!placeData[id]) {
    console.log("No place found with this ID");
    res.render("error404");
  } else {
    console.log("Deleting place with ID:", id);
    placeData.splice(id, 1);
    res.redirect("/places");
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
