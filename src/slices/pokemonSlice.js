import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filteredPokemon: '',
};

const searchBar = createSlice({
	name: 'searchBar',
	initialState,
	reducers: {
		setFilteredPokemon: (state, action) => {
			state.filteredPokemon = action.payload;
		},
	},
});

export const { setFilteredPokemon } = searchBar.actions;

export default searchBar.reducer;
