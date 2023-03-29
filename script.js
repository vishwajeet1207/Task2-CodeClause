// Initialize countdown timer variables
var countdownTime;
var countdownInterval;

// Start the countdown timer
function startCountdown() {
  // Get the input value from the user
  countdownTime = document.getElementById("countdownTime").value;
  
  // Check if the input value is valid
  if (isNaN(countdownTime) || countdownTime < 1) {
    alert("Please enter a valid number of seconds");
    return;
  }
  
  // Get the current time
  var startTime = new Date().getTime();

  // Calculate the end time of the countdown timer
  var endTime = startTime + (countdownTime * 1000);

  // Update the countdown timer every second
  countdownInterval = setInterval(function() {
    // Get the current time
    var now = new Date().getTime();

    // Calculate the distance between now and the end time
    var distance = endTime - now;

    // Calculate days, hours, minutes and seconds left
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60))/1000 );

    // Display the countdown in the "countdownDisplay" element
    document.getElementById("countdownDisplay").innerHTML = 
      "<h3>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s </h3>";

    // If the countdown is finished, display a message and stop the interval
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdownDisplay").innerHTML = "<h3>Countdown finished</h3>";
    }
  }, 1000);
}

// Stop the countdown timer
function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdownDisplay").innerHTML = "0d 0hr 0m 0s";
}


// Stopwatch

// Initialize variables
var seconds = 0;
var minutes = 0;
var hours = 0;
var timer;

// Start the stopwatch
function startStopwatch() {
    clearInterval(timer);

  timer = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    displayStopwatch();
  }, 1000);
}

// Pause the stopwatch
function stopStopwatch() {
  clearInterval(timer);
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayStopwatch();
}

// Display the stopwatch on the page
function displayStopwatch() {
  var stopwatch = document.getElementById("stopwatchDisplay");
  stopwatch.innerHTML = "<h3>" + (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + "</h3>";
}