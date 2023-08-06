const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.error(err);
      res.render("error");
    });
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "http://placekitten.com/400/400";
  }

  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});


router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.error(err);
      res.render("error");
    });
});

router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.error(err);
      res.render("error");
    });
});

    router.post("/:id/comment", (req, res) => {
      console.log(req.body);
      db.Place.findById(req.params.id)
        .then((place) => {
          db.Comment.create(req.body)
            .then((comment) => {
              place.comments.push(comment.id);
              place.save().then(() => {
                res.redirect(`/places/${req.params.id}`);
              });
            })
            .catch((err) => {
              res.render("error404");
            });
        })
        .catch((err) => {
          res.render("error404");
        });
    });

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("DELETE /places/:id/rant/:rantId STUB");
});

router.post("/:id/rant", (req, res) => {
  // Retrieve the place by its ID from the database
  db.Place.findById(req.params.id)
    .then((place) => {
      // Create a new comment with the data from the request body
      db.Comment.create({
        author: req.body.author,
        content: req.body.content,
        stars: req.body.stars,
        rant: !!req.body.rant, // Convert string "on" to a boolean value
      }).then((comment) => {
        // Add the newly created comment to the place's comments array
        place.comments.push(comment._id);
        // Save the updated place with the new comment
        place.save().then(() => {
          // Redirect back to the show page for the place after adding the comment
          res.redirect(`/places/${req.params.id}`);
        });
      });
    })
    .catch((err) => {
      console.error(err);
      res.render("error404");
    });
});

module.exports = router;
