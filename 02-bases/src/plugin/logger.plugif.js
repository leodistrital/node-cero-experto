const winston = require("winston");
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
	level: "info",
	format: combine(timestamp(), json()),
	// defaultMeta: { service: "user-service" },
	transports: [
		new winston.transports.File({ filename: "error.log", level: "error" }),
		new winston.transports.File({ filename: "combined.log" }),
	],
});

// if (process.env.NODE_ENV !== "production") {
// 	logger.add(
// 		new winston.transports.Console({
// 			format: winston.format.simple(),
// 		})
// 	);
// }

logger.add(
	new winston.transports.Console({
		format: winston.format.simple(),
	})
);

module.exports = function buildLogger(service) {
	return {
		log: (mesage) => {
			logger.log("info", { mesage, service });
		},
		error: (mesage) => {
			logger.error("error", { mesage, service });
		},
	};
};
