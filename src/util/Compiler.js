const fs = require("fs");
const browserify = require("browserify");
const chalk = require("chalk");
const ora = require("ora");

class Compiler {
  compile(build) {
    if (!fs.existsSync(`${process.cwd()}/${build.split(/(\\)|(\/)/g)[0]}`)) {
      fs.mkdirSync(`${process.cwd()}/${build.split(/(\\)|(\/)/g)[0]}`);
    }

    const spinner = ora({ text: "Generating application..", color: "cyan", spinner: "dots" }).start();

    browserify()
      .on("file", () => {
        spinner.succeed(chalk.green(`Generated in ${build}`))
      })
      .add(`${process.cwd()}/${this.file}`)
      .transform("uglifyify", { global: true })
      .transform("babelify")
      .bundle()
      .pipe(fs.createWriteStream(`${process.cwd()}/${build}`));
  }
}

module.exports = Compiler;
