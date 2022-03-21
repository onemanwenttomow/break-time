document
    .getElementById("break")
    .addEventListener("click", addBreakEndTimeToHtml);

window.addEventListener("load", addBreakEndTimeToHtml);

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
        end.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        }) +
        "</span></h1>";
    document.getElementById("meet-at").innerHTML = meetBackHtml;
}

function updateProgressBar() {
    let bar = document.querySelector("#progress");
    let progress = mapNum(Date.now(), d.getTime(), end.getTime(), 100, 0);
    bar.style.backgroundColor = `hsl(351.2, 100%, ${mapNum(
        progress,
        0,
        100,
        83.9,
        100
    )}%)`;
    if (progress <= 0) {
        clearInterval(intervalId);
        bar.style.width = 0;
        return;
    }
    // console.log("tick", `${progress}%`, Date.now(), d.getTime(), end.getTime());
    bar.style.width = `${mapNum(
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
