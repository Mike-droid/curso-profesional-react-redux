import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';

export const PokemonCard = () => {
	return (
		<Card
			title='Mewtwo'
			cover={
				<img
					src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
					alt='Mewtwo'
				/>
			}
			extra={<StarOutlined />}
		>
			<Meta description='psychic' />
		</Card>
	);
};
