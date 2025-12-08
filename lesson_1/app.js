// var trafficText;
// var let const
// hoisting

const trafficText = document.getElementById("traffic-text");
const redBtn = document.getElementById("red-light");
const yellowBtn = document.querySelector("#yellow-light");
const greenBtn = document.querySelector("#green-light");

// KISS - Keep It Simple and Stupid
// DRY - Don't Repeat Yourself

function resetLights() {
  const defaultColor = "#555";
  redBtn.style.backgroundColor = defaultColor;
  yellowBtn.style.backgroundColor = defaultColor;
  greenBtn.style.backgroundColor = defaultColor;
}

function switchRed() {
  resetLights();
  redBtn.style.backgroundColor = "red";
  trafficText.textContent = "stop".toUpperCase();
  trafficText.style.color = "red";
}

redBtn.addEventListener("click", switchRed);

// ---------------------------------------------------

yellowBtn.addEventListener("click", function () {
  resetLights();
  yellowBtn.style.backgroundColor = "yellow";
  trafficText.textContent = "wait".toUpperCase();
  trafficText.style.color = "yellow";
});

// ------------------------------------------------------

greenBtn.onclick = () => {
  resetLights();
  greenBtn.style.backgroundColor = "green";
  trafficText.textContent = "go".toUpperCase();
  trafficText.style.color = "green";
};

// DOM - Document Object Model
// Events - события

// Publisher - subscriber

const passport = {
  series: "ID",
  number: "123456",
  issueDate: "01-01-2000",
  expiryDate: "01-01-2010",

  prolongate: function () {},
  block() {},
};
