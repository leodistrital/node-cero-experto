import { CheckService } from "../domain/use-cases/check/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
	public static start() {
		console.log("Server started...");

		CronService.createJob("*/15 * * * * *", () => {
			// const date = new Date();
			// console.log(" 5 second", date);
			new CheckService(
				() => console.log("succes"),
				(error) => console.log(error)
			).execute("https://google.com");
			// new CheckService().execute("http://localhost:3000");
		});
	}
}
