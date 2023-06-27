const router = require("express").Router();
// const ticketmaster = require("../utils/ticketmaster-api.js");

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
    const apikey = process.env.API_KEY;
    const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=358&apikey=${apikey}`
    const response = await fetch(apiUrl);
    const searchData = await response.json();
    console.log(response);
  } catch (err) {
    res.status(500).json(err);
  }
});
    
    // const eventTime = response.dates;

    // const eventDate = response.dates;
    // const eventName = response.name;
    // const eventVenue = response.venue[i].name;
    // const eventCity = response.city;
    
    // const eventImage = response.images[i]
    // const sales = response.sales;
    // let searchData = response.json()
    

    



module.exports = router;