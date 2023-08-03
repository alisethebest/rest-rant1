const places = require("express").Router();

places.get("/", (req, res) => {
  const places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/h-thai-ml-tables.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coffee-cat.jpg",
    },
  ];
  res.render("places/Index", { places });
});

places.get("/new", (req, res) => {
  res.render("places/New");
});

places.post("/", (req, res) => {
  console.log(req.body);
  res.send(200);
});

module.exports = places;
