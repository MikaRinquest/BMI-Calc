function calculate() {
  height = parseInt(document.getElementById("height").value) / 100; //Retrieves the input and turns it into a number
  weight = parseInt(document.getElementById("weight").value);
  score = weight / (height * height); //Retrieves the input and turns it into a number
  document.getElementById("output").innerHTML = score.toFixed(1); //Displays the value inside the html

  if (score < 16 || score > 40) {
    // document.querySelector("calc").style.backgroundColor = 'red';
    response = "You need to go see a doctor my good sir/ma'am.";
  } else if (score <= 17) {
    response = "You should probably start bulking.";
  } else if (score <= 18.5) {
    response = "Just a bit more food, but nothing to be concerned about.";
  } else if (score <= 25) {
    response = "Typical weight.";
  } else if (score <= 30) {
    response = "You might want to lost a bit of weight, but still healthy.";
  } else {
    response = "You should probably go on a diet.";
  } //The above gives parameters depending on the value of the score
  document.getElementById("Result").innerHTML = response;
} //Displays the text inside of the html
