// require('dotenv').config();

// function displayEvents(events) {
//     const eventName = events._embedded.events.name;
//     eventName.getElementById('event-name');
//     eventName.innerHTML = eventName;
//     events.appendChild(eventName);
//     const eventDate = events._embedded.dates.start.localDate;
//     eventDate.getElementById('');
//     eventDate.innerHTML = eventDate;
//     events.appendChild(eventDate);
//     const eventCity = events._embedded.venues[0].city.name;
//     eventCity.getElementById('');
//     eventDate.innerHTML = eventCity;
//     events.appendChild(eventCity);
//     const eventVenue = events._embedded.venues[0].name + ", " + events._embedded.venues[0].city.name + ", " + events._embedded.venues[0].address.line1; 
//     eventVenue.getElementById('');
//     eventVenue.innerHTML = eventVenue;
//     events.appendChild(eventVenue);
//     const eventUrl = events._embedded.venues[0].url;
//     eventUrl.getElementById('');
//     eventUrl.innerHTML = eventUrl;
//     events.appendChild(eventUrl);
//  };

// const searchCity = async (city) => {
//     const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=${city}&apikey=${process.env.API_KEY}`)
//     return response;
// };

// function searchArtist(artist) {
//     fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${artist}&apikey=${process.env.API_KEY}`)
//     .then(response => {
//         if (!response.ok) {
//             alert("artist not found. Please try again.");
//             throw new Error("artist not found.");
//         }
//         return response.json();
//     })
//     .then(body => console.log(body))
//     .catch(error => console.error('city not found', error));
// };

// function searchDate(date) {
//     fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&startDateTime=${date}&apikey=${process.env.API_KEY}`)
//     .then(response => {
//         if (!response.ok) {
//             alert("date not found. Please try again.");
//             throw new Error("date not found.");
//         }
//         return response.json();
//     })
//     .then(body => console.log(body))
//     .catch(error => console.error('date not found', error));
// };

// function searchVenue(venue) {
//     fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&venueName=${venue}&apikey=${process.env.API_KEY}`)
//     .then(response => {
//         if (!response.ok) {
//             alert("venue not found. Please try again.");
//             throw new Error("venue not found.");
//         }
//         return response.json();
//     })
//     .then(body => console.log(body))
//     .catch(error => console.error('venue not found', error));
// };

// var city = searchCity('358');
// console.log(city);

// var artist = searchArtist('Metallica');
// console.log(artist);

// var date = searchDate('2023-09-01T00:00:00Z');
// console.log(date);

// var venue = searchVenue('Madison Square Garden');
// console.log(venue);

// module.exports = { displayEvents };
