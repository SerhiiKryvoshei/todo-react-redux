import { createStore } from "redux";
import throttle from "lodash/throttle";

import { rootReducer } from "./root-reducer";
import { loadState, saveState } from "./local-storage";

export const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		rootReducer,
		persistedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	store.subscribe(
		throttle(() => {
			saveState({
				todos: store.getState().todos,
			});
		}, 1000)
	);

	return store;
};
