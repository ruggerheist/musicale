// Purpose: To render the calendar on the user's profile page
import { newSearchHandler } from './handlers.js';

document.addEventListener('DOMContentLoaded', function () {
  var searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function(event){newSearchHandler(event)});
  var calendarEl = document.getElementById('calendar');
  // var response = fetch(`api/users/${id}`, {
  //   method: "GET"
  // });
  // var event = response.json();
  // console.log(event);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', 
    // events: event.concerts_attended_by_user
  });
  calendar.render();
});


