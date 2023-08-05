const places = require("express").Router();

const placeData = [
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
  res.render("places/index", { places: placeData });
});

places.get("/new", (req, res) => {
  res.render("places/New");
});

places.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log("Retrieving place with ID:", id);
  if (isNaN(id) || !placeData[id]) {
    console.log(
      "Error while retrieving place. ID might be incorrect or not exist."
    );
    res.render("error404");
    return;
  }
  res.render("places/show", { place: placeData[id], id: id });
});

places.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log("Received ID:", id);
  if (isNaN(id) || !placeData[id]) {
    console.log("Error while deleting. ID might be incorrect or not exist.");
    res.render("error404");
    return;
  }
  placeData.splice(id, 1);
  res.redirect("/places");
});

places.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  console.log("Editing place with ID:", id);
  if (isNaN(id) || !placeData[id]) {
    console.log("Error while editing. ID might be incorrect or not exist.");
    res.render("error404");
    return;
  }
 res.render("places/edit", { place: placeData[id], id: id });
});

places.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log("Updating place with ID:", id);
  if (isNaN(id) || !placeData[id]) {
    console.log("Error while updating. ID might be incorrect or not exist.");
    res.render("error404");
    return;
  }
  // Update the placeData with the new info from req.body
  Object.assign(placeData[id], req.body);
  res.redirect("/places");
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
  placeData.push(req.body);
  res.redirect("/places");
});

module.exports = places;
