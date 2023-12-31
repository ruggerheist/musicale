// function for the save button on the calendar
async function calendarSaveHandler(title, start, url, event_id) {
  const response = await fetch(`/api/concerts`, {
    method: 'POST',
    body: JSON.stringify({ title, start, url, event_id }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Concert saved!');
    const data = await response.json();
  } else {
    alert('Failed to save concert');
  }
};

// creates search result cards 
export async function newSearchHandler(event) {
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
      parsedEvents.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
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
          calendarSaveHandler(renderEvent.name, renderEvent.date, renderEvent.tickets, renderEvent.event_id);
          document.location.replace('/calendar');
          newSearchHandler(searchInput);
        });
        searchResultsDiv.append(cardBodyDiv, addButton);
        eventsContainer.append(dateDetailsDiv, searchResultsDiv);
      });

      // Apply styles for scrollable columns and allows link to open in new tab
      eventsContainer.style.display = 'flex';
      eventsContainer.style.overflowX = 'scroll';
      eventsContainer.style.maxWidth = '100%';
      document.querySelectorAll('.card-link').forEach(link => link.setAttribute('target', '_blank'));
    } else {
      alert('Failed to search');
    }
  }
};

// fetch to delete concert from users concerts 
export const deleteConcert = async (concert_id) => {
  const response = await fetch(`/api/concerts/${concert_id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.replace('/calendar');
  } else {
    alert('Failed to delete concert');
  }
};