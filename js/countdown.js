//Set the Countdown date
var countDownDate = new Date("Jun 14, 2019").getTime();

//Update the counter every one second
var x = setInterval(function() {

  //get todays date and time
  var now = new Date().getTime();

  //Find the distance between now and the countdown date
  var distance = countDownDate - now;

  //Time calculation for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);

  //display result in an element whose id is demo
  document.getElementById('countdown').innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
  //document.write("<h2>" + days + "Days " + hours + "Hours " + minutes + "Minutes " + seconds + "Seconds " + "</h2>");

  //If the countdown is finished say so
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy New Year!"
    //document.write("<h3>Happy New Year!</h3>");
  }
}, 1000);
