import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Col, Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Seacher';
import { fetchPokemonWithDetails } from './slices/dataSlice';

import logo from './static/logo.svg';
import './App.css';

function App() {
	const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

	const loading = useSelector((state) => state.ui.loading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPokemonWithDetails());
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
