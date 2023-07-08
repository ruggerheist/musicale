const { Concert } = require("../models");

const concertData = [
    {
        "title": "Beyonce - RENAISSANCE WORLD TOUR",
        "start": "2023-07-12",
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-philadelphia-pennsylvania-07-12-2023/event/02005E35F2A754CA",
        "event_id": "Z7r9jZ1Ae0kA"
    },
    {
        "title": "P!NK: Summer Carnival 2023",
        "start": "2023-09-18",
        "url": "https://www.ticketmaster.com/pnk-summer-carnival-2023-philadelphia-pennsylvania-09-18-2023/event/02005D67D6DB3B1F",
        "event_id": "vvG1FZ9pLpUSiL"
    },
    {
        "title": "Lady A: Request Line Tour",
        "start": "2023-10-21",
        "url": "https://concerts.livenation.com/lady-a-request-line-tour-philadelphia-pennsylvania-10-21-2023/event/02005B6C24229C00",
        "event_id": "vvG1FZpUY0FtYZ"
    },
];

const seedConcerts = () => Concert.bulkCreate(concertData);

module.exports = seedConcerts;