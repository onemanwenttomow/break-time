document.getElementById('break').addEventListener('click', addBreakEndTimeToHtml);

document.addEventListener('keypress', addBreakEndTimeToHtml);

var timeIncDecIndicators = document.querySelectorAll('.spinner-button');

document.querySelector('input[type="number"]').addEventListener('mouseenter', function() {
    timeIncDecIndicators[0].classList.add('white-text');
    timeIncDecIndicators[1].classList.add('white-text');
});
document.querySelector('input[type="number"]').addEventListener('mouseleave', function() {
    timeIncDecIndicators[0].classList.remove('white-text');
    timeIncDecIndicators[1].classList.remove('white-text');
});

function addBreakEndTimeToHtml() {
    var lengthOfBreak = document.querySelector('input[type="number"]').value;
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var endOfBreakTime = getEndOfbreakTime(hour, minute + Number(lengthOfBreak));
    var meetBackHtml = '<h1>Meet back at: <span id="meetback">' + endOfBreakTime +'</span></h1>';
    document.getElementById('meet-at').innerHTML = meetBackHtml;
}

function getEndOfbreakTime(hour, mins) {
    if (mins < 10) {
        return (hour + 1) + ':0' + mins;
    } else if (mins > 59 && (mins - 60) < 10) {
        return (hour + 1) + ':0' + (mins - 60);
    } else if (mins > 59) {
        return (hour + 1) + ':' + (mins - 60);
    }
    return hour + ':' + mins;
}
