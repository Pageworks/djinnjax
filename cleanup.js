const fs = require("fs");
const rimraf = require("rimraf");

if (fs.existsSync("./dist")) {
    rimraf.sync("./dist");
}
