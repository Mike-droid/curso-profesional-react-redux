import { useDispatch } from 'react-redux';
import { setFilteredPokemon } from '../slices/pokemonSlice';
import { Input } from 'antd';

export const Searcher = () => {
	const dispatch = useDispatch();

	const onSearch = (searchTerm) => dispatch(setFilteredPokemon(searchTerm));

	return (
		<Input.Search
			placeholder='Buscar / Mostrar todos con texto vacío'
			style={{ marginBottom: 10 }}
			onSearch={onSearch}
		/>
	);
};
