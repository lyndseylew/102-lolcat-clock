var time = new Date().getHours();
var messageText;
var image;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;


// Update the message and images depending on what time it is.
var updateClock = function()
{
	// get html element for the clock message and image
  var clockMessage = document.getElementById("timeEvent");
  var clockImage = document.getElementById("lolcat");

	// set the default image
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

	// set messages and images based on the time of day
  if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
  	image = "http://roflzoo.com/pics/072010/breakdancing-kitten-big.jpg";
  } else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://www.argospetinsurance.co.uk/assets/uploads/2017/10/pexels-photo-416160.jpeg";
  } else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://www.elpassatgedelsgats.com/wp-content/uploads/2017/03/wallpaper-cat-eat-fish.jpg";
  } else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
    image = "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/Skyword/images/black-and-white-kitten-ready-to-pounce-SW.jpg";
  } else if (time < noon) {
    messageText = "Good morning!";
    image = "https://images.huffingtonpost.com/2015-11-27-1448621966-2272308-PunnyandFunnyNamesforCats-thumb.jpg";
  } else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://img.thrfun.com/img/135/715/kittens_l3.jpg";
  } else {
    messageText = "Good afternoon!";
    image = "https://wallpapercave.com/wp/9dkegvx.jpg";
  }

	// set message and image based on time of day
  clockMessage.innerText = messageText;
  clockImage.src = image;

	showCurrentTime();
};

// Show the current time
var showCurrentTime = function()
{
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
      meridian = "PM";
  }
  if (hours > noon) {
      hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
      minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
      seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Party Time Button functionality
var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Over";
      partyTimeButton.style.background = "#0A8DAB";
   }
   else {
     isPartyTime = false;
     time = new Date().getHours();
     partyTimeButton.innerText = "PARTY TIME!";
     partyTimeButton.style.background = "#222";
   }
};

partyTimeButton.addEventListener("click", partyEvent);

// Time Selector Functionality
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
