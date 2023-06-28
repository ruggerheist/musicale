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

router.get('/searchcity/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const apikey = process.env.API_KEY;
    const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=${apikey}&city=${city}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const searchData = await response.json();
    res.status(200).json(searchData);
    const events = searchData._embedded.events;
    events.forEach(event => {
      console.log(event.name);
      console.log(event.dates.start.localDate);
      console.log(event._embedded.venues[0].name + ", " + event._embedded.venues[0].city.name + ", " + event._embedded.venues[0].address.line1);
      console.log(event._embedded.venues[0].url);

    });
    displayEvents(events);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

function displayEvents(events) {
    const eventName = events._embedded.events.name;
    eventName.getElementById('');
    eventName.innerHTML = eventName;
    events.appendChild(eventName);
    const eventDate = events._embedded.dates.start.localDate;
    eventDate.getElementById('');
    eventDate.innerHTML = eventDate;
    events.appendChild(eventDate);
    const eventCity = events._embedded.venues[0].city.name;
    eventCity.getElementById('');
    eventDate.innerHTML = eventCity;
    events.appendChild(eventCity);
    const eventVenue = events._embedded.venues[0].name + ", " + events._embedded.venues[0].city.name + ", " + events._embedded.venues[0].address.line1; 
    eventVenue.getElementById('');
    eventVenue.innerHTML = eventVenue;
    events.appendChild(eventVenue);
    const eventUrl = events._embedded.venues[0].url;
    eventUrl.getElementById('');
    eventUrl.innerHTML = eventUrl;
    events.appendChild(eventUrl);
 }
    
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
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