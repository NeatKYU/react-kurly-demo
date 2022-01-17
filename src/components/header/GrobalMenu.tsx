import styled from 'styled-components';
import Proptypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup'
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { FaThList } from 'react-icons/fa'

interface GrobalMenuProps {

}

export const GrobalMenu = () => {

return (
	 <Container>
		 <div className='cartegory'>
			<FaThList/>
		 	전체 카테고리
		 </div>
		 <div>신상품</div>
		 <div>베스트</div>
		 <div>알뜰쇼핑</div>
		 <div>특가/혜택</div>
		 <InputContainer>
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
			<IconButton>
				<AiOutlineShoppingCart/>
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

	position: sticky;
	top: 0;

	div {
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
	height: 2rem;
	display: flex;
	justify-content: center;
	position: relative;
	padding-top: 0.4rem;
	
	input {
		width: 90%;
		height: 80%;
		border-radius: 2rem;
		padding-left: 1rem;
		background-color: #f3f3f3;
		border: 0px;
	}

	button {
		position: absolute;
		right: 7px;
		top: 1px;
		padding: 0.2rem !important;
		margin-top: 0.4rem;
	}

`