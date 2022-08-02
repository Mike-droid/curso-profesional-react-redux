import { Col } from 'antd';
import { getPokemons } from './api';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Seacher';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getPokemonsWithDetails } from './actions';

import logo from './static/logo.svg';
import './App.css';

function App() {
	const pokemons = useSelector((state) => state.pokemons);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons();
			dispatch(getPokemonsWithDetails(pokemonsRes));
		};

		fetchPokemons();
	}, [dispatch]);

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
