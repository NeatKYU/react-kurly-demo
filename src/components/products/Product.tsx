import styled from 'styled-components';
import Proptypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import pizza from '@asset/images/pizza.jpg';

interface ProductProps {

}

export const Product = () => {

	return (
		<Container>
			<div className='thumbnail'>
				<img src={pizza}/>
				<IconButton>
					<AiOutlineShoppingCart/>
				</IconButton>
			</div>
			<div className='info-section'>
				<div className='title'>
					test title
				</div>
				<div className='price'>
					<div className='dc-persent'>
						50%
					</div>
					5000원
				</div>
				<div className='price-dc'>
					10000원
				</div>
			</div>
		</Container>
	)
}

Product.prototype = {

}

const Container = styled.div`
	width: 15.4rem;
	height: 24rem;
	margin: 0 auto;

	display: flex;
	flex-direction: column;

	overflow: hidden;
	
	.thumbnail {
		width: 100%;
		height: 75%;
		display: flex;
		justify-content: center;
		position: relative;

		img {
			width: 110%;
		}
		button {
			background-color: #9f58f17d ;
			color: #fff;
			position: absolute;
			bottom: 15px;
			right: 15px;
		}
	}

	.info-section {
		width: 100%;
		height: 25%;

		display: flex;
		flex-direction: column;
		
		.title {
			width: 100%;

			box-sizing: border-box;
			padding-top: 10px;
			margin-bottom: 10px;
		}
		.price {
			width: 100%;
			display: flex;
			flex-direction: row;
			font-weight: bold;

			.dc-persent {
				margin-right: 10px;
				color: orange;
			}


		}

		.price-dc {
			width: 100%;
			color: gray;
			text-decoration: line-through;
		}
	}
`