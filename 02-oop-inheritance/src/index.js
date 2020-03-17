const social = {
  share: function (friendName) {
    console.log(`Share ${this.title} with ${friendName}.`);
  },

  like: function (friendName) {
    console.log(`${friendName} likes ${this.title}.`);
  }
}

const logger = new Logger();
const rocky = new movie("rocky", 1976, 242);
const sylvester = new actor("Silvester Stallone", 73);

Object.assign(rocky, social);//mixin

const actors = [
  new actor("Carl Weathers", 72),
  new actor("Talia Shire", 73),
]
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

