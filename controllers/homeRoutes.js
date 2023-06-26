const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", async (req, res) => {
  try {
    res.render("calendar");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;