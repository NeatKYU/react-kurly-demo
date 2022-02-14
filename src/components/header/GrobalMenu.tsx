import styled from 'styled-components';
import Proptypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup'
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { FaThList } from 'react-icons/fa'
import { CartegoryModal } from '@components/modal/CartegoryModal';
import { useNavigate } from 'react-router-dom';

interface GrobalMenuProps {

}

export const GrobalMenu = () => {

	const history = useNavigate();

	const moveToCartPage = () => {
		history('/cart')
	}

	return (
		<Container>
			<div className='cartegory'>
				<FaThList/>
				<span className='menu-title'>전체 카테고리</span>
				<CartegoryModal/>
			</div>
			<div className='menu-title'>신상품</div>
			<div className='menu-title'>베스트</div>
			<div className='menu-title'>알뜰쇼핑</div>
			<div className='menu-title'>특가/혜택</div> 
			<InputContainer className='flex-all-center'>
				<input></input>
				<IconButton size='small'>
					<BiSearchAlt2/>
				</IconButton>
			</InputContainer>
			<ButtonGroup>
				<IconButton>
					<GrLocation/>
				</IconButton>
				<IconButton>
					<AiOutlineHeart/>
				</IconButton>
				<IconButton onClick={moveToCartPage}>
					<AiOutlineShoppingCart />
				</IconButton>
			</ButtonGroup>
		</Container>
	)
}

GrobalMenu.prototype = {

}

const Container = styled.div`
	width: 95%;
	margin: 0 auto;
	height: 56px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	.menu-title {
		cursor: pointer;
		
		&:hover {
			color: #a058f1;
			text-decoration: underline;
			text-underline-offset: 5px;
		}
	}

	.cartegory {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 100%;

		//카테고리 모달의 main
		&:hover {
			.main {
				display: block;
			}
		}

		svg {
			margin-right: 5px;
		}
	}
	button {
		&:hover {
			color: #a058f1;
		}
	}

`

const InputContainer = styled.div`
	width: 12rem;
	height: 1.95rem;
	background-color: #f3f3f3;
	border-radius: 2rem;
	
	input {
		width: 90%;
		height: 80%;
		padding-left: 1rem;
		border: 0px;
		background-color: transparent;
		outline: none;
	}

	button {
		padding: 0.2rem !important;
		margin-right: 10px;
	}

`