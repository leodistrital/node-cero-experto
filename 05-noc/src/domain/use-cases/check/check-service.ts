interface CheckserviceUseCase {
	execute(url: string): Promise<boolean>;
}

type SuccesCallBack = () => void;
type ErrorCallBack = (error: string) => void;

export class CheckService implements CheckserviceUseCase {
	constructor(
		private readonly succesCallBack: SuccesCallBack,
		private readonly errorCallBack: ErrorCallBack
	) {}

	async execute(url: string): Promise<boolean> {
		try {
			const req = await fetch(url);
			if (!req.ok) {
				throw new Error(`Error on check service ${url}`);
			}
			// console.log(`servicio ${url} is OK`);
			this.succesCallBack();
		} catch (error) {
			console.log(`${error}`);
			this.errorCallBack(`${error}`);
			return false;
		}
		return true;
	}
}
