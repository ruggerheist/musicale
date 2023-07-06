const newSaveHandler = async (event) => {
    event.preventDefault();
    const search = document.querySelector('#search').value.trim();
    if (search) {
        document.location.replace(`/search/${search}`);
    }
};

const newAddHandler = async (event) => {
    event.preventDefault();
    const concert_id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/concerts/${concert_id}`, {
        method: 'POST',
        body: JSON.stringify({ concert_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to add concert');
    }
};

const newDeleteHandler = async (event) => {
    event.preventDefault();
    const concert_id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/concerts/${concert_id}`, {
        method: 'DELETE',
        body: JSON.stringify({ concert_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to delete concert');
    }
};

//wrote this function for the save button on the calendar
async function calendarSaveHandler(title, start, url) {
    const response = await fetch(`/api/concerts`, {
        method: 'POST',
        body: JSON.stringify({ title, start, url }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to save concert');
    }
}

export async function newSearchHandler(event) {
    const userIdEl = document.querySelector('#userId');
    const userId = userIdEl.dataset.id;
    event.preventDefault();
    let renderEvents;
    const searchInput = document.querySelector('#search-input').value.trim();
    if (!searchInput) {
        alert('Please enter a search term');
    } else {
        const response = await fetch(`/searchCity/${searchInput}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            renderEvents = await response.json();
            const eventDetails = document.querySelector('.mt-4');
            let parsedEvents = JSON.parse(renderEvents);
            console.log(parsedEvents);
            parsedEvents.forEach((renderEvent) => {
                eventDetails.innerHTML += `
            <div class="col-2" id="dateDetailsColumn">
                <div id="dateDetailsText">${renderEvent.date}</div>          
            </div>           
            <div class="col-4" id="searchResultsColumn">
                <div class="card-body">
                <h5 class="card-title">${renderEvent.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${renderEvent.venue}</h6>
                <p class="card-text">${renderEvent.date}</p>
                <a href="${renderEvent.tickets}" class="card-link">Tickets</a>
                
                 
<button type="submit" class="btn btn-primary" id="save-button">Add Event to Calendar</button> 
                
            </div>    
            
            </div>
            `;
            //add event images in div ^^^
document.getElementById('save-button').addEventListener('click', function () {
               calendarSaveHandler(renderEvent.name, renderEvent.date, renderEvent.tickets);
            });
            });
        } else {
            alert('Failed to search');
        }
    };
};



{/* <form action="/api/concerts/${renderEvent.name}/${renderEvent.date}/${renderEvent.tickets}" method="post"></form> */ }
// document
//     .querySelector('')
//     .addEventListener('submit', newSaveHandler);

// document
//     .querySelector('')
//     .addEventListener('submit', newAddHandler);

// document
//     .querySelector('')
//     .addEventListener('submit', newDeleteHandler);
