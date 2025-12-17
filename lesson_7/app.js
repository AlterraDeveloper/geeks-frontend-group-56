function getNextNewYear() {
  const now = moment().add(1, "y");
  const newYearDate = moment(`${now.year()}-01-01`);
  return newYearDate;
}

function setCountdownTitle() {
  const titleYear = document.querySelector("#title-year");
  const newYearDate = getNextNewYear();
  titleYear.textContent = newYearDate.year();
}

function countdown() {
  const daysValue = document.querySelector("#days");
  const hoursValue = document.querySelector("#hours");
  const minutesValue = document.querySelector("#minutes");
  const secondsValue = document.querySelector("#seconds");

  const startDate = moment();
  const endDate = getNextNewYear();

  const diff = moment.duration(endDate - startDate);

  daysValue.textContent = formatTimeValue(Math.floor(diff.asDays()));
  hoursValue.textContent = formatTimeValue(diff.hours());
  minutesValue.textContent = formatTimeValue(diff.minutes());
  secondsValue.textContent = formatTimeValue(diff.seconds());
}

function formatTimeValue(value) {
  return String(value).padStart(2, "0");
}

setInterval(() => {
  setCountdownTitle();
  countdown();
}, 1000);

// CDN - Content Delivery Network
