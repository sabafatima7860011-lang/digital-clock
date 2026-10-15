let is24Hour = false;

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("toggleBtn");

function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    let ampm = "";

    if (!is24Hour) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    hours = String(hours).padStart(2, "0");

    timeElement.textContent =
        `${hours}:${minutes}:${seconds}${ampm}`;

   dateElement.textContent =
    now.toLocaleDateString();
    
}
toggleBtn.addEventListener("click", function () {
    is24Hour = !is24Hour;

    toggleBtn.textContent = is24Hour
        ? "Switch to 12-hour format"
        : "Switch to 24-hour format";

    updateTime();
});

setInterval(updateTime, 1000);
updateTime();









