import { combineReducers } from 'redux';
import dataReducer from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice';
import searchReducer from '../slices/pokemonSlice';

export const rootReducer = combineReducers({
	data: dataReducer,
	ui: uiReducer,
	searchBar: searchReducer,
});
