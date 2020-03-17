class actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
const social = {
  share: function (friendName) {
    console.log(`Share ${this.title} with ${friendName}.`);
  },
  like: function (friendName) {
    console.log(`${friendName} likes ${this.title}.`);
  }
};

class Logger {
  log(info) {
    console.log(`The ${info} event has been emitted`);
  }

}

class movie extends EventEmmiter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
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

  addCast(cast) {
    if (Array.isArray(cast)) {
      this.cast = this.cast.concat(cast);
    } else {
      this.cast.push(cast);
    }
  }

}

const logger = new Logger();
const rocky = new movie("rocky", 1976, 242);
const sylvester = new actor("Silvester Stallone", 73);
Object.assign(rocky, social); //mixin

const actors = [new actor("Carl Weathers", 72), new actor("Talia Shire", 73)];
rocky.addCast(sylvester);
rocky.addCast(actors);
const pearlHarbor = new movie("pearl harbor", 2001, 183);
rocky.on("Play", logger.log);
rocky.on("Pause", logger.log);
rocky.on("Resume", logger.log);
rocky.play();
rocky.pause();
rocky.resume();
rocky.share("cosme fulanito");
rocky.like("juan gomez");

