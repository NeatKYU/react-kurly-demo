import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';
import { CountButton } from '@components/shared/CountButton';
import Pizza from '@asset/images/pizza.jpg';

//recoil
import { useRecoilState } from 'recoil';
import { AmountAtom } from '@recoils/Cart';

interface CartItemProps {
	productName: string;
	productPrice: number;

}

export const CartItem = (props: CartItemProps) => {

	const { productName, productPrice } = props;

	const [isChecked, setIsChecked] = useState(true);
	const [currentCount, setCurrntCount] = useState(1);
	const [currentAmount, setCurrentAmount] = useRecoilState(AmountAtom);

	const handleChecked = () => {
		setIsChecked(!isChecked)
	}

	const handleIncrement = () => {
		setCurrntCount(currentCount + 1)
		setCurrentAmount(currentAmount + productPrice)
	}

	const handleDecrement = () => {
		if(currentCount > 0) {
			setCurrntCount(currentCount - 1)
			setCurrentAmount(currentAmount - productPrice)
		}
	}

	return (
		<Container>
			<div className='check-box flex-vertical-center'>
				<div onClick={handleChecked}>
					{isChecked ? <RiCheckboxCircleFill/> : <RiCheckboxCircleLine/>}
				</div>
			</div>
			<div className='product-box flex-vertical-center'>
				<div className='image-zone'>
					<img src={Pizza}/>
				</div>
				<div className='product-name flex-vertical-center'>
					{productName}
				</div>
				<div className='count-button flex-all-center'>
					<CountButton 
						currentCount={currentCount}
						incrementFunction={handleIncrement}
						decrementFunction={handleDecrement}
					/>
				</div>
				<div className='amount'>
					{productPrice * currentCount || 0} 원
				</div>
				<div className='delete-button flex-vertical-center'>
					<IoIosClose fontSize={'2rem'}/>
				</div>
			</div>
		</Container>
	)
}

CartItem.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 130px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eeeeee;
	
	.check-box {
		width: 50px;
		height: 100px;

		svg {
			font-size: 2rem;
		}
	}
	.product-box {
		width: 100%;
		height: 100%;

		.image-zone {
			width: 80px;
			height: 100px;
			display: table;

			img {
				display: table-cell;
				vertical-align: middle;
				width: 80px;
				height: 100px;
			}
		}

		.product-name {
			width: 330px;
			height: 100%;
			padding-left: 20px;
		}

		.count-button {
			width: 120px;
		}

		.amount {
			width: 100px;
			text-align: right;
		}

		.delete-button {
			margin-left: auto;
		}
	}

`