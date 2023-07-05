const { Concert } = require("../models");

const concertData = [
    {
        "title": "Beyonce - RENAISSANCE WORLD TOUR",
        "start": "2023-07-12",
        // "venue": "Lincoln Finanical Field, One Lincoln Financial Way Philadelphia, 19148",
        "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191"
    },
    {
        "title": "P!NK: Summer Carnival 2023",
        "start": "2023-09-18",
        // "venue": "Citizens Bank Park, One Citizens Bank Way, Philadelphia,19148",
        "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655"
    },
    {
        "title": "Lady A: Request Line Tour",
        "start": "2023-10-21",
        // "venue": "The Met Philadelphia, 858 N Broad St, Philadelphia,19130",
        "url": "https://www.livenation.com/artist/K8vZ917GFIf/lady-a-events"
    },
];

const seedConcerts = () => Concert.bulkCreate(concertData);

module.exports = seedConcerts;