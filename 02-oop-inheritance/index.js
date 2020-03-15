class Logger {
  log(info) {
    console.log(`The ${info} event has been emitted`);
  }
}

class EventEmmiter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => {
        fn(eventName);
      });
    } else {
      console.log(`${eventName} event doesn't exist`);
    }
  }

  off(eventName, callback) {
    if (this.events.has(eventName)) {
      let listenerList = this.eventList.get(eventName);
      listenerList.delete(callback);
    }
  }
}

class movie extends EventEmmiter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
  }

  play() {
    this.emit("Play");
  }

  pause() {
    super.emit("Pause");
  }

  resume() {
    super.emit("Resume");
  }
}

class actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const logger = new Logger();
const rocky = new movie("rocky", 1976, 242);

const pearlHarbor = new movie("pearl harbor", 2001, 183);
rocky.on("Play", logger.log);
rocky.on("Pause", logger.log);
rocky.on("Resume", logger.log);

rocky.play();
rocky.pause();
rocky.resume();
