

const snowflakesContainer = document.querySelector("#snowflakes");

// <div class="snow">&#10052;</div>
for(let i = 0; i < 100; i++){
    const snowflake = document.createElement('div');
    snowflake.classList.add("snow");
    snowflake.innerHTML = "&#10052;";
    snowflakesContainer.appendChild(snowflake);
}