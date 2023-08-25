let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

/*Display Values */
let timerEl = document.getElementById('timer');
let value = 0;

/*Displaying milliseconds,seconds,minutes,hours */
function stopWatchDisplay() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let hr = hours < 10 ? '0' + hours : hours;
    let min = minutes < 10 ? '0' + minutes : minutes;
    let sec = seconds < 10 ? '0' + seconds : seconds;

    let millisec = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerEl.innerHTML = `${hr} : ${min} : ${sec} : ${millisec}`;

}
/*Start Button */
document.getElementById('startBtn').onclick = function() {

    if (value !== null) {
        clearInterval(value);
    }
    value = setInterval(stopWatchDisplay, 10);
}

/*Stop Button */
document.getElementById('stopBtn').onclick = function() {
    clearInterval(value);
}
/*Reset Button */
document.getElementById('resetBtn').onclick = function() {
    clearInterval(value);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerEl.innerHTML = '00 : 00 : 00 : 000';
}