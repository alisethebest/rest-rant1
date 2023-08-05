const router = require("express").Router();
const db = require('../models');
const places = require('../models/places');

router.get("/", (req, res) => {
  db.Place.find()
  .then(places => {
    res.render("places/index", { places });
  })
  .catch(err => {
    console.error(err);
    res.render("error");
  }); 
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.error(err);
      res.render("error");
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  res.send("GET /places/:id STUB");
} );

router.get("/:id/edit", (req, res) => {
  res.send("GET /places/:id/edit STUB");
} );

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id STUB");
} );

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("DELETE /places/:id STUB");
} );

router.post("/:id/rant", (req, res) => {
  res.send("POST /places STUB");
} );

module.exports = router;

