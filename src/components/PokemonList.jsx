import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons }) => {
	return (
		<div className='PokemonList'>
			{pokemons.map((pokemon) => (
				<PokemonCard
					key={pokemon.name}
					name={pokemon.name}
					image={pokemon.sprites.front_default}
					types={pokemon.types.map((type) => `${type.type.name} - `)}
				/>
			))}
		</div>
	);
};
