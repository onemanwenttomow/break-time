document.getElementById('break').addEventListener('click', function() {
    var lengthOfBreak = document.querySelector('input[type="number"]').value;
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var endOfBreakTime = getEndOfbreakTime(hour, minute + Number(lengthOfBreak));

    console.log(
        endOfBreakTime
    );
});

function getEndOfbreakTime(hour, mins) {
    if (mins > 59) {
        if ((mins - 60) < 10) {
            return (hour + 1) + ':0' + (mins - 60);
        }
        return (hour + 1) + ':' + (mins - 60);
    }
    return hour + ':' + mins;
}
