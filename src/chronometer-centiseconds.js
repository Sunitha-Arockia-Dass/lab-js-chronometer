class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = this.currentTime / 100 / 60;

    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = (this.currentTime / 100) % 60;
    return Math.floor(seconds);
  }

  // return Math.floor((this.currentTime / 1000) % 60)
  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length === 1) {
      return "0" + value;
    } else {
      return value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let formmattedMinutes = this.computeTwoDigitNumber(minutes);
    let seconds = this.getSeconds();
    let formmattedSeconds = this.computeTwoDigitNumber(seconds);
    let centiseconds = this.getCentiseconds();
    let formattedCentiseconds = this.computeTwoDigitNumber(centiseconds);

    return `${formmattedMinutes}:${formmattedSeconds}.${formattedCentiseconds}`;
  }
}
