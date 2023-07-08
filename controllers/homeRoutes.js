const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", async (req, res) => {
  try {
    res.render("calendar", { user_id: req.session.user_id });
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
    const events = searchData._embedded.events;
    const renderEvents = events.map(eventData => {
      console.log(eventData._embedded);
      let ticketData;
      try {
        ticketData = eventData.url;
      } catch (err) {
        ticketData = "No tickets available";
      }
      return {
        name: eventData.name,
        date: eventData.dates.start.localDate,
        venue: eventData._embedded.venues[0].name + ", " + eventData._embedded.venues[0].address.line1 + ", " + eventData._embedded.venues[0].city.name + "," + eventData._embedded.venues[0].postalCode,
        tickets: ticketData, 
        event_id: eventData.id
      };
    });
    res.json(JSON.stringify(renderEvents));
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

// Logout
router.post('/logout', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


module.exports = router;