import { SET_FILTER } from "./filters-const";

export const setFilter = (filter) => ({
	type: SET_FILTER,
	filter: filter,
});
