const router = require("express").Router();

router.get("/", (req, res) => {
    const places = [
      {
        name: "H-Thai-ML",
        city: "Seattle",
        state: "WA",
        cuisines: "Thai, Pan-Asian",
        pic: "/images/chick-fil-a.png",
      },
      {
        name: "Coding Cat Cafe",
        city: "Phoenix",
        state: "AZ",
        cuisines: "Coffee, Bakery",
        pic: "/images/in-n-out.png",
      },
    ];
  res.render("places/Index", { places });
});

module.exports = router;
