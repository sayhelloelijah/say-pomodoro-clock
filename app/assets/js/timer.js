export default class Timer {

    static getCurrentTime() {
        this.currentTime = Date.now(); // get time in milliseconds
        return this.currentTime;
    }

    static getFutureTime(minutes) {
        const newDate = Date.now();
        console.log(newDate);
        this.futureTime = new Date(Date.now() - (60000 * minutes)); // 25 minutes from now
        return this.futureTime;
    }

    static getTimeRemaining(endtime) {
        const time = new Date(endtime) + Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        console.log(`\nTime: ${time} \nSeconds: ${seconds} \nMinutes: ${minutes}`)
        return {
            total: time,
            minutes,
            seconds,
        };
    }

    static initializeClock(endtime) {
        const minutesSpan = document.querySelector('.pomodoro__minutes');
        const secondsSpan = document.querySelector('.pomodoro__seconds');
        const time = Timer.getTimeRemaining(endtime);
        minutesSpan.innerHTML = (`0 ${time.minutes}`).slice(-2);
        secondsSpan.innerHTML = (`0 ${time.seconds}`).slice(-2);
        if (time.total <= 0) {
            clearInterval(this.timeInterval);
        }
        // setInterval(Timer.initializeClock, 1000);
    }
}
