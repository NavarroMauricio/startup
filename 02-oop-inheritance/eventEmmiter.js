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