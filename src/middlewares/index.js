export const logger = (store) => (next) => (action) => {
	//* store -> the application's store
	//* next -> we call this function when the middleware is done with its job
	//* action goes to reducer
	next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
	const featured = [{ name: 'mike' }, ...actionInfo.action.payload];
	const updatedActionInfo = {
		...actionInfo,
		action: { ...actionInfo.action, payload: featured },
	};
	next(updatedActionInfo);
};
