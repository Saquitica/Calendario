document.addEventListener('DOMContentLoaded', function() {
    const activityContainer = document.getElementById('activityContainer');
    const dateInput = document.getElementById('dateInput');
    const timeInput = document.getElementById('timeInput');
    const activityInput = document.getElementById('activityInput');
    const addButton = document.getElementById('addButton');
  
    addButton.addEventListener('click', function() {
      const date = dateInput.value;
      const time = timeInput.value;
      const activity = activityInput.value.trim();
      if (date !== '' && time !== '' && activity !== '') {
        addActivity(date, time, activity);
        dateInput.value = '';
        timeInput.value = '';
        activityInput.value = '';
      } else {
        alert('Por favor, ingrese una fecha, hora y actividad válidas.');
      }
    });
  
    function addActivity(date, time, activity) {
      const activityItem = document.createElement('div');
      activityItem.classList.add('activity');
      activityItem.textContent = `${date} ${time}: ${activity}`;
      activityContainer.appendChild(activityItem);
    }
  });
  
  
  