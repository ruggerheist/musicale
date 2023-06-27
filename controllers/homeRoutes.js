const router = require("express").Router();
const ticketmaster = require("../utils/ticketmaster-api.js");

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

router.get('/searchcity', async (req, res) => {
  try {
    const response = await fetch(data._embedded.events[i]);
    const eventDate = response.date;
    const eventName = response.name;
    const eventVenue = response.venue[i].name;
    const eventCity = response.city;
    
    // const eventImage = response.images[i]
    // const sales = response.sales;
    // let searchData = response.json()
    res.render('searchcity', {searchData});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;