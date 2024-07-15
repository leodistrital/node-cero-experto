const { getUUID } = require("./get-uuid.plugin");
const { getAge } = require("./get-age.plugin");
const { http } = require("./http-client.plugin");
const buildLogger = require("./logger.plugif");

module.exports = {
	getUUID,
	getAge,
	http,
	buildLogger,
};
