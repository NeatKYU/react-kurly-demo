import { useRecoilValue, useRecoilState } from 'recoil';
import { userAtom } from '@recoils/User';
import { AmountAtom } from '@recoils/Cart';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { CustomButton } from '@components/shared/CustomButton';
import { Fetcher } from '@utils/fetcher';
import useSWR from 'swr';
import { useEffect } from 'react';

interface PayViewProps {

}

export const PayView = () => {

	const userInfo = useRecoilValue(userAtom)
	const [amount, setAmount] = useRecoilState(AmountAtom);
	const {data, error} = useSWR(`/api/cart/amount/${userInfo.user_id}`, Fetcher)

	useEffect(() => {
		if(data){
			setAmount(parseInt(data.amount))
		}
	}, [data])

	return (
		<Container>
			<div className='result-box'>
				<div className='address-box'>
					<div className='title'>
						<GrLocation/>배송지
					</div>
					<div className='body'>
						{userInfo.address1}<br/>
						{userInfo.address2}
					</div>
					<div className='button-zone'>
						<CustomButton 
							backgroundColor='#fff' 
							label='배송지 변경' 
							width='100%' 
							height='30px'
							borderColor='#5f0081'
							fontSize='10px'
							color='#5f0081'
						/>
					</div>
				</div>
				<div className='price-box'>
					<div className='price'>
						<div className='float-left'>상품금액</div>
						<div className='float-right'>{amount}원</div>
					</div>
					<div className='price'>
						<div className='float-left'>상품할인금액</div>
						<div className='float-right'>-0원</div>
					</div>
					<div className='price'>
						<div className='float-left'>배송비</div>
						<div className='float-right'>0원</div>
					</div>
					<div className='div-line'/>
					<div className='result-price'>
						<div className='float-left'>결제예정금액</div>
						<div className='float-right'>{amount}원</div>
					</div>
				</div>
			</div>
			<div className='order-button'>
				<CustomButton 
					label='주문하기'
					backgroundColor='#5f0081'
					color='white'
					width='100%'
					height='50px'
					fontSize='14px'
				/>
			</div>
		</Container>
	)
}

PayView.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	
	.result-box {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		border: 1px solid #eeeeee;

		.address-box {
			width: 100%;
			height: auto;
			padding: 20px;
			border-bottom: 1px solid #eeeeee;
			
			.title {
				width: 100%;
				height: 20px;
				display: flex;
				align-items: center;
				svg {
					font-size: 1.325rem;
					margin-right: 5px;
				}
			}
			.body {
				padding-top: 10px;
			}

			.button-zone {
				padding-top: 10px;
			}
		}

		.price-box {
			background-color: #f5f5f5;
			padding: 20px;

			.price {
				width: 100%;
				height: 30px;
				padding-bottom: 10px;
			}

			.div-line {
				width: 100%;
				height: 2px;
				margin-top: 10px;
				margin-bottom: 10px;
				background-color: #eeeeee;
			}

			.result-price {
				width: 100%;
				height: 50px;
				padding-top: 10px;
			}
		}
	}

	.order-button {
		padding-top: 10px;
	}
`