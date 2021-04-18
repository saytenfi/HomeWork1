class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}
export default Timer;
//2nd part wont pass lint test
// 
// class Timer {
//   start(seconds) {
//     const timerInterval = setInterval(() => {
//       if (seconds === 0) {
//         clearInterval(timerInterval);
//       }

//       console.log(seconds);
//       seconds -= 1;
//     }, 1000);
//   }
// }
// export default Timer;
// function Timer(seconds) {
//   this.seconds = seconds;
// }

// Timer.prototype.start = function () {
//   const instance = this;
//   var timerInterval = setInterval(() => {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

// export default Timer;
//     // * Refactor the code to use the ES6 class syntax.
//     // * Refactor the code to use arrow function(s).
//     // * Refactor the code to use `let/const`.
