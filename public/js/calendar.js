document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  const renderEvents = async () => {
    const response = await fetch(`api/users/${user_id}`, {
      method: "GET"
    });
    if (response.ok) {
      const result = await response.json();
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: result.concerts_attended_by_user
      });
      calendar.render();
    } else {
      alert('Error in getting concerts!')
    }
  }
  renderEvents();
});

