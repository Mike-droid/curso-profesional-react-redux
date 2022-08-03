import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Col, Spin } from 'antd';
import { getPokemons } from './api';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Seacher';
import { getPokemonsWithDetails, setLoading } from './actions';

import logo from './static/logo.svg';
import './App.css';

function App() {
	const pokemons = useSelector((state) => state.pokemons);
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			dispatch(setLoading(true));
			const pokemonsRes = await getPokemons();
			dispatch(getPokemonsWithDetails(pokemonsRes));
			dispatch(setLoading(false));
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
			{loading ? (
				<Col offset={12}>
					<Spin spinning size='large' />
				</Col>
			) : (
				pokemons && <PokemonList pokemons={pokemons} />
			)}
		</div>
	);
}

export default App;
