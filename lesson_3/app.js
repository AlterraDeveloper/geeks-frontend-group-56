// <div class="square"></div>
function renderSquare() {
  const div = document.createElement("div");
  div.className = "square";
  // div.classList.add("square");
  // div.setAttribute("class", "square");
  return div;
}

function renderField(size) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const cell = renderSquare();
    container.appendChild(cell);
  }
}

// document.getElementById
// document.getElementsByClassName("")
// document.getElementsByTagName

const radioButtons = document.querySelectorAll("input[type=radio]");

for (const radioBtn of radioButtons) {
  radioBtn.addEventListener("change", function () {
    const size = radioBtn.value;

    switch (String(size).toUpperCase()) {
      case "S":
        renderField(100);
        break;
      case "M":
        renderField(300);
        break;
      case "L":
        renderField(500);
        break;
    }
  });
}

const checkSizeEvent = new Event("change"); // {}
radioButtons[0].dispatchEvent(checkSizeEvent);
radioButtons[0].checked = true;

const container = document.querySelector("#container");

container.addEventListener("mousemove", function (event) {
  console.log(event);
  
  const target = event.target;
  if (target.classList.contains("square")) {
    target.style.backgroundColor = getRandomColor();

    setTimeout(function () {
      target.style.backgroundColor = "#1d1d1d";
    }, 100);
  }
});

function getRandomColor() {
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
