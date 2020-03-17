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
        }
        else {
            this.cast.push(cast);
        }
    }
}
