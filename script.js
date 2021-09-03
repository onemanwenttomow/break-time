document
    .getElementById("break")
    .addEventListener("click", addBreakEndTimeToHtml);

let numInput = document.querySelector('input[type="number"]');
numInput.addEventListener("mouseenter", toggleIncDecIndicators);
numInput.addEventListener("mouseleave", toggleIncDecIndicators);
numInput.addEventListener("input", addBreakEndTimeToHtml);

var timeIncDecIndicators = document.querySelectorAll(".spinner-button");
var d;
var end;
var intervalId;

function toggleIncDecIndicators() {
    timeIncDecIndicators[0].classList.toggle("white-text");
    timeIncDecIndicators[1].classList.toggle("white-text");
}

function addBreakEndTimeToHtml() {
    var lengthOfBreak = numInput.value;
    d = new Date();
    end = new Date(d);
    end.setTime(end.getTime() + Number(lengthOfBreak) * 60 * 1000);
    clearInterval(intervalId);
    intervalId = setInterval(updateProgressBar, 1000);
    var meetBackHtml =
        '<h1>Meet back at: <span id="meetback">' +
        `${end.getHours()}:${end.getMinutes()}` +
        "</span></h1>";
    document.getElementById("meet-at").innerHTML = meetBackHtml;
}

function updateProgressBar() {
    let progress = mapNum(Date.now(), d.getTime(), end.getTime(), 100, 0);
    if (progress <= 0) {
        clearInterval(intervalId);
    }
    console.log("tick", `${progress}%`, Date.now(), d.getTime(), end.getTime());
    document.querySelector("#progress").style.width = `${mapNum(
        Date.now(),
        d.getTime(),
        end.getTime(),
        100,
        0
    )}%`;
}

function mapNum(val, inMin, inMax, outMin, outMax) {
    return ((val - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
