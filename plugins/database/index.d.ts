export = Database;
declare class Database {
    /**
     *
     * @param {object} player - Player object
     * @param {string} property - Property to change
     * @param {*} value - New value
     */
    updateDataPlayer(player: object, property: string, value: any): any;
    /**
     *
     * @param {object} player - Player object
     * @param {object} data - Player data
     */
    createDataPlayer(player: object, data: object): any;
    /**
     *
     * @param {object} player - Player object
     */
    getDataPlayer(player: object): any;
    getAllPlayers(): any;
}
