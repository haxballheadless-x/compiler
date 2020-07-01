const Compiler = require("./util/Compiler");

module.exports = class HHX extends Compiler {
  constructor(file) {
    super()
    this.file = file;
  }
};
