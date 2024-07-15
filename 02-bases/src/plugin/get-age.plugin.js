const getAgePlugin = require("get-age");

const getAge = (birthday) => getAgePlugin(birthday);

module.exports = { getAge };
