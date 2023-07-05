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


router.get('/searchcity/:city', async (req, res) => {
  try {
    const city = req.params.city;
    // const city = document.getElementsByClassName("form-control").value;
    // req.params.city = city;
    const apikey = process.env.API_KEY;
    const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=${apikey}&city=${city}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const searchData = await response.json();
    const events = searchData._embedded.events;
    // events.forEach(event => {
    //   // console.log(event.name);
    //   // console.log(event.url)
      
    //   // console.log(event.dates.start.localDate);
    //   // console.log(event._embedded.venues[0].name + ", " + event._embedded.venues[0].city.name + ", " + event._embedded.venues[0].address.line1);
    //   // console.log(event._embedded.venues[0].url);     
    // });

    const renderEvents = events.map( eventData => {
      return { name: eventData.name,
        date: eventData.dates.start.localDate,
        venue: eventData._embedded.venues[0].name + ", " + eventData._embedded.venues[0].address.line1 + ", " + eventData._embedded.venues[0].city.name + "," + eventData._embedded.venues[0].postalCode,
        tickets: eventData._embedded.attractions[0].url
       }; 
    });
    // console.log(renderEvents);
    res.json(JSON.stringify(renderEvents));
    // displayEvents(events);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
    
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

module.exports = router;