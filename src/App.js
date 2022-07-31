import { useEffect, useState } from 'react';
import { Col } from 'antd';
import { Searcher } from './components/Seacher';
import { PokemonList } from './components/PokemonList';
import { getPokemons } from './api/index';
import logo from './static/logo.svg';
import './App.css';

function App() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons();
			setPokemons(pokemonsRes);
		};
		fetchPokemons();
	}, []);

	return (
		<div className='App'>
			<Col span={4} offset={10}>
				<img src={logo} alt='Pokedux' />
			</Col>
			<Col span={8} offset={8}>
				<Searcher />
			</Col>
			{pokemons && <PokemonList pokemons={pokemons} />}
		</div>
	);
}

export default App;
