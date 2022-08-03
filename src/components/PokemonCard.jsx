import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import { StarButton } from './StarButton';
import { setFavorite } from '../actions';
import './PokemonList.css';

export const PokemonCard = ({ name, image, types, id, favorite }) => {
	const dispatch = useDispatch();

	const handleFavorite = () => {
		dispatch(setFavorite({ pokemonId: id }));
	};

	return (
		<Card
			title={name}
			cover={<img src={image} alt={name} />}
			extra={<StarButton isFavorite={favorite} onClick={handleFavorite} />}
		>
			<Meta description={types} />
		</Card>
	);
};
