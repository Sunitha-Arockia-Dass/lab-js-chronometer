class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
  value=value.toString()
  if(value.length===1)
  {
    return '0'+value
  }
  else
  {
   return value
  }
}
stop() {
  clearInterval(this.intervalId)
   
   }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes=this.getMinutes()
    let formmattedMinutes=this.computeTwoDigitNumber(minutes)
    let seconds=this.getSeconds()
    let formmattedSeconds=this.computeTwoDigitNumber(seconds)
        
    return `${formmattedMinutes}:${formmattedSeconds}`
  
  }


}
