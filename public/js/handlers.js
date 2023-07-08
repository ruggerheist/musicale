const newSaveHandler = async (event) => {
  event.preventDefault();
  const search = document.querySelector('#search').value.trim();
  if (search) {
    document.location.replace(`/search/${search}`);
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

// function for the save button on the calendar
async function calendarSaveHandler(title, start, url, event_id) {
  const response = await fetch(`/api/concerts`, {
    method: 'POST',
    body: JSON.stringify({ title, start, url, event_id }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    // document.location.replace('/profile');
    const data = await response.json();
    // console.log('saved', data)
  } else {
    alert('Failed to save concert');
  }
}

// creates search result cards 
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
      const eventsContainer = document.getElementById('event-results');
      eventsContainer.innerHTML = '';
      let parsedEvents = JSON.parse(renderEvents);

      parsedEvents.forEach((renderEvent) => {
        const dateDetailsDiv = document.createElement('div');
        const searchResultsDiv = document.createElement('div');
        const cardBodyDiv = document.createElement('div');
        const addButton = document.createElement('button');

        dateDetailsDiv.classList.add('col-2', 'align-self-center', 'text-center');
        searchResultsDiv.classList.add('col-4', 'mb-3', 'px-3');
        cardBodyDiv.classList.add('card-body');
        addButton.classList.add('btn', 'btn-primary');

        dateDetailsDiv.id = 'dateDetailsColumn';
        searchResultsDiv.id = 'searchResultsColumn';
        addButton.id = 'save-button';

        dateDetailsDiv.innerHTML = `<div id="dateDetailsText">${renderEvent.date}</div>`;
        cardBodyDiv.innerHTML = `<h5 class="card-title">${renderEvent.name}</h5>
                                          <h6 class="card-subtitle mb-2 text-muted">${renderEvent.venue}</h6>
                                          <p class="card-text">${renderEvent.date}</p>
                                          <a href="${renderEvent.tickets}" class="card-link">Tickets</a>`;
        addButton.textContent = 'Add Event To Calendar';
        addButton.addEventListener('click', function () {
          // Might be able to add html/js to .name to create a button in the displayed calendar event.
          // Tested the above. Doesn't work because calendar renders html as plain text.
          // Might be able to add an eventMouseEnter function -- trying to find event creation point to do so.
          // Might also be able to add an event listner after page render/update
          calendarSaveHandler(renderEvent.name, renderEvent.date, renderEvent.tickets, renderEvent.event_id);
          document.location.replace('/calendar');
        });
        searchResultsDiv.append(cardBodyDiv, addButton);
        eventsContainer.append(dateDetailsDiv, searchResultsDiv);
      });

      // Apply styles for scrollable columns and allows link to open in new tab
      eventsContainer.style.display = 'flex';
      eventsContainer.style.overflowX = 'scroll';
      eventsContainer.style.maxWidth = '100%';
      document.querySelector('.card-link').setAttribute('target', '_blank');
    } else {
      alert('Failed to search');
    }
  }
};


// TO DELETE

// const newAddHandler = async (event) => {
//   event.preventDefault();
//   const concert_id = event.target.getAttribute('data-id');
//   const response = await fetch(`/api/concerts/${concert_id}`, {
//     method: 'POST',
//     body: JSON.stringify({ concert_id }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   if (response.ok) {
//     document.location.replace('/profile');
//   } else {
//     alert('Failed to add concert');
//   }
// };
