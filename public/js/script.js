function searchCity(city) {
    fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${city}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`)
        .then(response => {
            if (!response.ok) {
                alert("City not found. Please try again.");
                // document.getElementById('search').focus();
                throw new Error("City not found.");
            }
            return response.json();
        })
        .then(body => console.log(body))
        .catch(error => console.error('city not found', error));
};
    
    // document.getElementById("search").value = "";
//     var response = (await fetch(searchedCity)).body.getReader();
//     var {body, done} = await response.read();
    
//     console.log(body);
    
//     if (!response.ok) {
//         alert("City not found. Please try again.");
//         // document.getElementById('search').focus();
//         throw new Error("City not found.");
//     }
//     return response.json();
// };

function searchArtist(artist) {
    fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${artist}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`)
    .then(response => {
        if (!response.ok) {
            alert("artist not found. Please try again.");
            throw new Error("artist not found.");
        }
        return response.json();
    })
    .then(body => console.log(body))
    .catch(error => console.error('city not found', error));
};

function searchDate(date) {
    fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&startDateTime=${date}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`)
    .then(response => {
        if (!response.ok) {
            alert("date not found. Please try again.");
            throw new Error("date not found.");
        }
        return response.json();
    })
    .then(body => console.log(body))
    .catch(error => console.error('date not found', error));
};

function searchVenue(venue) {
    fetch (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&venueName=${venue}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`)
    .then(response => {
        if (!response.ok) {
            alert("venue not found. Please try again.");
            throw new Error("venue not found.");
        }
        return response.json();
    })
    .then(body => console.log(body))
    .catch(error => console.error('venue not found', error));
};

var city = searchCity('358');
console.log(city);

var artist = searchArtist('Metallica');
console.log(artist);

var date = searchDate('2023-09-01T00:00:00Z');
console.log(date);

var venue = searchVenue('Madison Square Garden');
console.log(venue);

// searchButton.addEventListener("click", searchArtist, searchCity, searchDate, searchVenue);