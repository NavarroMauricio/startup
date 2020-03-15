
class movie{
    constructor(name,year,duration){
        this.title=name;
        this.year=year;
        this.duration=duration;
    }

    play() {
        console.log(`Playing ${this.title}...`);
    }
    pause () {
        console.log(`Paused ${this.title}...` );
    }
    resume() {
        console.log(`Resuming ${this.title}...` );
    }
}

class actor {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
}

class EventEmitter {
    constructor() {
      this.events = {};
    }

    on (eventName, listener) {
        if(!this.events[eventName]) {
          this.events[eventName] = [];
        }     
        this.events[eventName].push(listener);  
      }

      emit (eventName) {
        const event = this.events[eventName];
        if( event ) {
          event.forEach(fn => {
             fn(eventName);
           });
         }
      }
      
      off(eventName,listener) {
        if(this.events[eventName]) {
          this.events[eventName] = this.events[eventName].filter(fn => fn!== listener)
        }
      }
  }

const rocky = new movie('rocky',1976,242);
const pearlHarbor = new movie('pearl harbor',2001,183); 
rocky.play();
rocky.pause();
rocky.resume();