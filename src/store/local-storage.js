export const loadState = () => {
	try {
		const currentState = localStorage.getItem("state");

		if (currentState === null) {
			return undefined;
		}

		return JSON.parse(currentState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const stateToBeSaved = JSON.stringify(state);

		localStorage.setItem("state", stateToBeSaved);
	} catch (error) {
		console.error(error);
	}
};
