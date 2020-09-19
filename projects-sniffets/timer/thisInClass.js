class Timer {
    constructor(durationInput, startBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        // Method 2
        this.startBtn.addEventListener('click', this.start)
        // Method 2
        // this.startBtn.addEventListener('click', this.start.bind(this))
    }

    // Method 1
    start = () => {
        this.importantMethodToCall();
    }

    // Method 2
    // start () {
    //     // console.log('Timer started !!');
    //     this.importantMethodToCall();
    // }
    importantMethodToCall() {
        console.log('Important thing was done !!');
    }
}


const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timerInstance = new Timer(durationInput, startBtn, pauseBtn);
timerInstance.start();