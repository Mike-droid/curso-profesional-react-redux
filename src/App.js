import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Col } from 'antd';
import { Searcher } from './components/Seacher';
import { PokemonList } from './components/PokemonList';
import { getPokemons } from './api/index';
import { setPokemons } from './actions';
import logo from './static/logo.svg';
import './App.css';

function App() {
	const pokemons = useSelector((state) => state.pokemons);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons();
			dispatch(setPokemons(pokemonsRes));
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
