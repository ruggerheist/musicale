// Purpose: To render the calendar on the user's profile page
import { newSearchHandler } from './handlers.js';

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
    });
    calendar.render();
  } else {
    alert('Error in getting concerts!')
  }
});




