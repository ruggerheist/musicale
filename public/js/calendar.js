// Purpose: To render the calendar on the user's profile page
import { newSearchHandler, deleteConcert } from './handlers.js';

document.addEventListener('DOMContentLoaded', async function () {
  var searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function (event) { newSearchHandler(event) });
  var calendarEl = document.getElementById('calendar');
  const response = await fetch(`api/users/concerts`, {
    method: "GET"
  });
  if (response.ok) {
    const userConcertsData = await response.json();
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: userConcertsData,
      eventClick: function (info) {
        info.jsEvent.preventDefault(); // don't let the browser navigate
        if (info.event.url) {
          window.open(info.event.url);
        }
      },
      eventMouseEnter: function (info) {
        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = 'X';
        deleteIcon.className = 'delete-icon';
        info.el.appendChild(deleteIcon);
        const concert_id = info.event._def.extendedProps.user_concert.concert_id;
        console.log(concert_id)
        deleteIcon.addEventListener('click', (event) => {
          event.preventDefault();
          console.log(concert_id)
          const confirmation = confirm('Are you sure you want to delete this concert?');
          if (confirmation) {
            deleteConcert(concert_id);
          }
        });
      },
      eventMouseLeave: function (info) {
        const deleteIcon = document.querySelector('.delete-icon');
        deleteIcon.parentNode.removeChild(deleteIcon);
      }
    });

    // styling for calendar
    // calendarEl.style.display = 'block'; 
    calendarEl.style.width = '800px';
    calendarEl.style.marginLeft = '150px';
    calendar.render();
  } else {
    alert('Error in getting concerts!')
  }
});




