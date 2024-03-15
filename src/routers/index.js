/**
 * Load all routers
 */

const fs = require("fs");

const routers = [];

fs.readdirSync(__dirname).forEach((file) => {
    console.log("File",file)
  if (!["index.js"].includes(file)) {
    console.log("require",`./${file}`);
    routers.push(require(`./${file}`)); // eslint-disable-line
  }
});

module.exports = routers;
