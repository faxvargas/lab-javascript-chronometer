class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback){
    this.intervalId=setInterval((callback) => {
      this.currentTime += 1
      if(callback){
        callback()
      }
    }, 1000);
  }

  getMinutes() {
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return parseInt(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      return 0 + value.toString()
    }else{
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ":" + seconds
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
