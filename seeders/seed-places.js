const db = require("../models");

db.Place.create([
  {
    name: "In-N-Out Burger",
    city: "Los Angeles",
    state: "CA",
    cuisines: "Burgers, Fries, Shakes",
    pic: "/images/in-n-out.png",
    founded: 1948,
  },
  {
    name: "Chick-fil-a",
    city: "Los Angeles",
    state: "CA",
    cuisines: "Chicken Sandwiches, Waffle Fries, Lemonade",
    pic: "/images/chick-fil-a.png",
    founded: 1946,
  },])

  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.error(err)
    console.log("Failure!", err);
    process.exit();
  });
