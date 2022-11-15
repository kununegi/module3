class Clock {
    constructor() {
        this.template = "h m s";
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours; //01.. 05... 09.. 10 11 01 02 03 04
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let myClock = new Clock()
myClock.start()