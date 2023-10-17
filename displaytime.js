function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Display the time in the element with id "time"
    const timeElement = document.getElementById('time');
    if (timeElement) {
      timeElement.innerText = `Current Time: ${timeString}`;
    }
  }
  
  // Update the time initially
  updateTime();
  
  // Update the time every second
  setInterval(updateTime, 1000);