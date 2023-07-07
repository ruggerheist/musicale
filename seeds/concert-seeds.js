const { Concert } = require("../models");

const concertData = [
    {
        "title": "Beyonce - RENAISSANCE WORLD TOUR",
        "start": "2023-07-12",
        // "venue": "Lincoln Finanical Field, One Lincoln Financial Way Philadelphia, 19148",
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-philadelphia-pennsylvania-07-12-2023/event/02005E35F2A754CA",
        "event_id": "Z7r9jZ1Ae0kA"
    },
    {
        "title": "P!NK: Summer Carnival 2023",
        "start": "2023-09-18",
        // "venue": "Citizens Bank Park, One Citizens Bank Way, Philadelphia,19148",
        "url": "https://www.ticketmaster.com/pnk-summer-carnival-2023-philadelphia-pennsylvania-09-18-2023/event/02005D67D6DB3B1F",
        "event_id": "ShN2ZpGk1Ae0kA"
    },
    {
        "title": "Lady A: Request Line Tour",
        "start": "2023-10-21",
        // "venue": "The Met Philadelphia, 858 N Broad St, Philadelphia,19130",
        "url": "https://concerts.livenation.com/lady-a-request-line-tour-philadelphia-pennsylvania-10-21-2023/event/02005B6C24229C00",
        "event_id": "Z7rJl2sdAe0kA"
    },
];

const seedConcerts = () => Concert.bulkCreate(concertData);

module.exports = seedConcerts;