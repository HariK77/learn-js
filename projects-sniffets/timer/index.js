const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timerInstance = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration) {
        duration = totalDuration;
        circle.setAttribute('fill', 'transparent');
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        circle.setAttribute('fill', 'green');
    }
});
