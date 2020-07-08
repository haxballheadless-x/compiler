class Command {
  constructor(room, config) {
    this.config = config;
    this.room = room;
  }
  createCommand(message, callback) {
    if (this.config.commandName && this.config.prefix) {

      message = message.split(/ +/);

      if (message[0] === `${this.config.prefix}${this.config.commandName}`) {
        callback(message.splice(1), this.config);
      }
    }
  }
}

module.exports = Command;