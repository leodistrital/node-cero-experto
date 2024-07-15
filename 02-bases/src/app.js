const { buildLogger } = require("./plugin");

const logger = buildLogger("app.js");

logger.log("Hello from app.js");
logger.error("paso algo malo app.js");

// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUUID, getAge } = require("./plugin");
// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: "John", birthday: "1978-12-04" };
// const jhon = makePerson(obj);
// console.table({ jhon });

// const getPokmenoById = require("./js-foundation/06-prmises");

// console.table(getPokmenoById(1));

// const info = getPokmenoById(1);

// console.log(info);

// getPokmenoById(25).then((name) => console.log(name));
