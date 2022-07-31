import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons }) => {
	return (
		<div className='PokemonList'>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon} />
			))}
		</div>
	);
};

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
};
