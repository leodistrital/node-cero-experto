const fs = require("fs");
const content = fs.readFileSync("readme.md", "utf-8");

const wordsount = content.split(" ").length;
const regex = new RegExp("react", "gi");

const worReactCount = content.match(regex);

console.log("cuantas plabras:", wordsount);
console.log("cuantas plabras React:", worReactCount.length);
