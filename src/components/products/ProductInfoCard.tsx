import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Cake from '@asset/images/cake.jpg'
import { CountButton } from '@components/shared/CountButton';
import { CustomIconButton } from '@components/shared/CustomIconButton';
import { CustomButton } from '@components/shared/CustomButton';
import { CustomButtonGroup } from '@components/shared/CustomButtonGroup';
import { AiOutlineHeart, AiOutlineBell } from 'react-icons/ai'

interface ProductInfoCardProps {

}

export const ProductInfoCard = () => {

	const [count, setCount] = useState(1);

	const incrementCount = () => {
		setCount(count+1)
	}
	const decrementCount = () => {
		setCount(count-1)
	}


	return (
		<Container>
			<div className='product-image'>
				<img src={Cake}/>
			</div>
			<div className='product-info'>
				<div className='product-title'>
					<span>[큐컬리] 오리지널 횡성 한우++</span>
				</div>
				<div className='product-subtitle'>
					<span>진짜 맛있는 한우가 온다!!</span>
				</div>
				<div className='product-price'>
					<div className='dc-title'>할인적용가</div>
					<div className='price-section'>
						<span className='current-price'>
							5000
							<span className='won'>원</span>
						</span>
						<span className='dc-section'>50%</span>
					</div>
					<div className='orginal-price'>
						10000원
					</div>
				</div>
				<div className='divider'/>
				<div className='product-info-section'>
					<div className='info-box'>
						<div className='info-title'>판매단위</div>
						<div className='info-description'>1박스</div>
					</div>
					<div className='info-box'>
						<div className='info-title'>중량/용량</div>
						<div className='info-description'>5g*30포</div>
					</div>
					<div className='divider'/>
					<div className='info-box'>
						<div className='info-title'>배송구분</div>
						<div className='info-description'>샛별배송/택배배송</div>
					</div>
					<div className='divider'/>
					<div className='info-box'>
						<div className='info-title'>포장타입</div>
						<div className='info-description'>상온/종이포장</div>
					</div>
					<div className='divider'/>
					<div className='info-box'>
						<div className='info-title'>알레르기 정보</div>
						<div className='info-description'>우유,대두,밀 함유</div>
					</div>
					<div className='divider'/>
					<div className='info-box'>
						<div className='info-title'>구매수량</div>
						<div className='info-description'>
							<CountButton 
								currentCount={count} 
								incrementFunction={incrementCount}
								decrementFunction={decrementCount}
							/>
						</div>
					</div>
					<div className='divider'/>
					<div className='final-price'>
						<span className='title'>총 상품가격: </span>
						<span className='price'>{5000*count}</span>
						<span className='won'>원</span>
					</div>
				</div>
				<CustomButtonGroup>
					<CustomIconButton icon={<AiOutlineHeart/>} color={'#a058f1'}/>
					<CustomIconButton icon={<AiOutlineBell/>} color={'gray'}/>
					<CustomButton 
						width={400} 
						height={50} 
						backgroundColor='#a058f1' 
						label={'장바구니 담기'} 
						color={'white'}
					/>
				</CustomButtonGroup>
			</div>
		</Container>
	)
}

ProductInfoCard.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 700px;
	display: flex;
	justify-content: space-between;


	.product-image {
		width: 400px;
		height: 502px;
		display: flex;

		img {
			display: flex;
			overflow: hidden;
		}
	}

	.divider {
		width: 100%;
		height: 2px;
		background-color: lightgray;
	}

	.product-info {
		width: 550px;
		height: 100%;
		display: flex;
		flex-direction: column;

		.product-title {
			width: 100%;
			height: 50px;
			font-size: 1.5rem;
			font-weight: bold;
			padding-top: 10px;

		}
		.product-subtitle {
			width: 100%;
			height: 20px;
			font-size: 0.8rem;
			color: #818181;
			margin-bottom: 30px;
		}

		.product-price {
			width: 100%;
			height: 80px;
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem;

			.price-section {
				width: 100%;
				height: 50px;
				font-size: 1.6rem;
				font-weight: bold;
				
				.current-price {
					margin-right: 10px;
					
				}
			}
			.orginal-price {
				color: gray;
				text-decoration: line-through;

			}
			.dc-section {
				width: 50px;
				height: auto;
				font-size: 1.6rem;
				color: lightcoral;
			}
			.dc-title {
				font-size: 12px;
				margin-bottom: 5px;
			}
		}

		.product-info-section {
			width: 100%;
			height: auto;

			.info-box {
				height: auto;
				display: flex;
				margin-top: 1rem;
				margin-bottom: 1rem;
				font-size: 13px;
				
				.info-title {
					width: 10rem;
					color: gray;
				}
				.info-description {
					width: 100%;
				}
			}
		}

		.final-price {
			width: 100%;
			margin-top: 30px;
			margin-bottom: 20px;
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;

			.title {
				font-size: 13px;
				vertical-align: bottom;
			}

			.price {
				font-size: 2rem;
				margin-right: 5px;
				margin-left: 10px;
			}
		}

		.won {
			font-size: 1rem;
		}
	}
`