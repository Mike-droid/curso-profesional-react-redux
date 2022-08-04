import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonDetails, getPokemons } from '../api/index';
import { setLoading } from './uiSlice';

const initialState = {
	pokemons: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
	'data/fetchPokemonWithDetails',
	async (_, { dispatch }) => {
		dispatch(setLoading(true));
		const pokemonsRes = await getPokemons();
		const pokemonDetails = await Promise.all(
			pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
		);
		dispatch(setPokemons(pokemonDetails));
		dispatch(setLoading(false));
	}
);

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload;
		},
		setFavorite: (state, action) => {
			const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
				return pokemon.id === action.payload.pokemonId;
			});

			if (currentPokemonIndex >= 0) {
				const isFavorite = state.pokemons[currentPokemonIndex].favorite;

				state.pokemons[currentPokemonIndex].favorite = !isFavorite;
			}
		},
	},
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
