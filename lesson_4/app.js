function renderBall(value) {
  // return <div class="array-item">props.value</div>

  const div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}
// const test = new Array();
// const test2 = Array.from([]);

const originalContainer = document.querySelector("#original");
const updatedContainer = document.querySelector("#updated");

// callback - функция обратного вызова

const original = [15, 7, 58, 65, 14, 8, 47, 3];

// forEach
const forEachResult = original.forEach(function (item) {
  const ball = renderBall(item);
  originalContainer.append(ball);
});

// func(15) func(7) func(58) func(65) ...

// map

function renderUpdated(array) {
  const balls = array.map(function (item) {
    return renderBall(item);
  });
  updatedContainer.innerHTML = "";
  updatedContainer.append(...balls);
}

function map5() {
  // const mapped = original.map(function(item) {
  //     return item + 5;
  // });
  const mapped = original.map((item) => item + 5);
  renderUpdated(mapped);
}

function mapX2() {
  const mapped = original.map((item) => item * 2);
  renderUpdated(mapped);
}

function filterGt50() {
  const filtered = original.filter((x) => x > 50);
  renderUpdated(filtered);
}

function filterEvens() {
  const filtered = original.filter((x) => x % 2 === 0);
  renderUpdated(filtered);
}

function sliceTop3() {
  const sliced = original.slice(0, 3);
  renderUpdated(sliced);
}

function sliceLast4() {
  const sliced = original.slice(-4);
  renderUpdated(sliced);
}

function reverse() {
  // how to copy array
  const copy = [...original];
  //   const copy = Array.from(original);
  // const copy = original.map(x => x);
  // const copy = original.filter(x => true);
  // const copy = new Array(...original);

  const reversed = copy.reverse();
  renderUpdated(reversed);
}

function sort(){
    const copy = new Array(...original);
    const sorted = copy.sort((a, b) => a - b);
    renderUpdated(sorted);
}

// кроссбраузерность
