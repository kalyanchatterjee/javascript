function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (!running) {
      running = true;
      startTime = new Date();
    } else {
      throw new Error("Stopwatch is already running");
    }
  };

  this.stop = () => {
    if (running) {
      running = false;
      endTime = new Date();
      duration = (endTime.getTime() - startTime.getTime()) / 1000;
    } else {
      throw new Error("Stopwatch is not running");
    }
  };

  this.reset = () => {
    running = false;
    startTime = null;
    endTime = null;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}
