class Database {
  constructor() {
    window.db = this;
  }
  /**
   *
   * @param {object} player - Player object
   * @param {string} property - Property to change
   * @param {*} value - New value
   */

  updateDataPlayer(player, property, value) {
    let playerData = localStorage.getItem(`p_${player.name}`);

    if (playerData) {
      let newData = JSON.parse(playerData);
      newData[property] = value;
      localStorage.setItem(`p_${player.name}`, JSON.stringify(newData));

      return new Promise((resolve, reject) => {
        resolve(JSON.parse(playerData));
      });
    }
  }
  /**
   *
   * @param {object} player - Player object
   * @param {object} data - Player data
   */
  createDataPlayer(player, data) {
    let playerData = localStorage.getItem(`p_${player.name}`);

    if (!playerData) {
      localStorage.setItem(`p_${player.name}`, JSON.stringify(data));

      return new Promise((resolve, reject) => {
        resolve(JSON.parse(playerData));
      });
    }
  }
  /**
   *
   * @param {object} player - Player object
   */
  getDataPlayer(player) {
    let playerData = localStorage.getItem(`p_${player.name}`);

    return new Promise((resolve, reject) => {
      if (!playerData) {
        reject(undefined);
      }
      resolve(JSON.parse(playerData));
    });
  }

  getAllPlayers() {
    return new Promise((resolve, reject) => {
      let data = localStorage;
      let players = [];

      for (var x in data) {
        if (x.startsWith("p_")) {
          players.push(JSON.parse(localStorage.getItem(x)));
        }
      }
      resolve(players);
    });
  }
}

module.exports = Database;
