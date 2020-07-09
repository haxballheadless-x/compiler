const Compiler = require("./util/Compiler");

module.exports = class HHX extends Compiler {
  /**
   * 
   * @param {string} file - File 
   */
  constructor(file) {
    super()
    this.file = file;
  }
};
