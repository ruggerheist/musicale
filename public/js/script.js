function searchCity(city) {
    var searchedCity = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${searchedCity}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`;
    document.getElementById("search").value = "";
    fetch(searchedCity)
        .then(function (response) {
            if (!response.ok) {
                alert("City not found. Please try again.");
                document.getElementById('search').focus();
                throw new Error("City not found.");
            }
            return json.stringify(response);
})
};

function searchArtist(artist) {
    var searchedArtist = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${searchedArtist}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`;
    document.getElementById("search").value = "";
    fetch(searchedArtist)
        .then(function (response) {
            if (!response.ok) {
                alert("Artist not found. Please try again.");
                document.getElementById('search').focus();
                throw new Error("Artist not found.");
            }
            return response.json();
})
};

function searchDate(date) {
    var searchedDate = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&startDateTime=${searchedDate}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`;
    document.getElementById("search").value = "";
    fetch(searchedDate)
        .then(function (response) {
            if (!response.ok) {
                alert("Date not found. Please try again.");
                document.getElementById('search').focus();
                throw new Error("Date not found.");
            }
            return response.json();
})
};

function searchVenue(venue) {
    var searchVenue = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&venueName=${searchVenue}&apikey=7OJqG8duSMOpsACrR35jGeMKYBCGCGNl`;
    document.getElementById("search").value = "";
    fetch(searchVenue)
        .then(function (response) {
            if (!response.ok) {
                alert("Venue not found. Please try again.");
                document.getElementById('search').focus();
                throw new Error("Venue not found.");
            }
            return response.json();
})
};

searchButton.addEventListener("click", searchArtist, searchCity, searchDate, searchVenue);