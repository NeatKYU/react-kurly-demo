import styled from 'styled-components';
import Proptypes from 'prop-types';
import { CartList } from '@components/cart/cartList';
import { PayView } from '@components/cart/PayView'

interface CartPageProps {

}

export const CartPage = () => {

	return (
		<Container>
			<div className='title flex-all-center'>
				<span>장바구니</span>
			</div>
			<div className='cart-main'>
				<div className='cart-list'>
					<CartList/>
				</div>
				<div className='pay-view'>
					<PayView/>
				</div>
			</div>
		</Container>
	)
}

CartPage.prototype = {

}


const Container = styled.div`
	width: 1000px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	.title {
		width: 100%;
		height: 100px;

		span {
			font-size: 1.5rem;
			font-weight: bold;
		}
	}

	.cart-main {
		display: flex;
		justify-content: space-between;

		.cart-list {
			width: 45.375rem;
			height: auto;

		}

		.pay-view {
			width: 16.125rem;
			height: auto;
		}
	}
`