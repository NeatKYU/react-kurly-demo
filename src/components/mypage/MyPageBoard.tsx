import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { CustomSelectBox } from '@components/shared/CustomSelectBox';
import { CustomButton } from '@components/shared/CustomButton';
import { AddressModal } from '@components/modal/AddressModal';
import { FaPlus } from 'react-icons/fa';


interface MyPageBoardProps {
	titleObj: any;
	route: number;
}

export const MyPageBoard = (props: MyPageBoardProps) => {

	const { titleObj, route } = props;
	const [isOpenModal, setIsModalOpen] = useState(false);

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<Container>
			<div className='mypage-board-title'>
				{titleObj.title}
				<span className='mypage-board-subtitle'>
					{titleObj.subTitle}
				</span>
				<div className='float-right'>
					{route === 1 ? <CustomSelectBox styleWidth='200px'/> : ''}
					{route === 3 ? 
						<CustomButton 
							width='200px' height='40px' 
							label='새 배송지 추가' color='#5f0081' 
							startIcon={<FaPlus/>}
							onClick={() => setIsModalOpen(!isOpenModal)}
						/> : ''
					}
				</div>
			</div>
			<div className='mypage-board-body'>
				<div className='empty-message'>
					{titleObj.emptyMessage}
				</div>
			</div>
			<AddressModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}/>
		</Container>
	)
}

MyPageBoard.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: auto;

	.mypage-board-title {
		width: 100%;
		height: 100px;
		font-weight: bold;
		font-size: 1.5rem;
		padding: 50px 0 0 0;
		border-bottom: 2px solid black;

		.mypage-board-subtitle {
			font-size: 13px;
			font-weight: initial;
			padding-left: 10px;
			color: #929292;
		}
	}

	.mypage-board-body {
		width: 100%;
		min-height: 100px;
		max-height: 500px;
		height: auto;

		.empty-message {
			width: 100%;
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #888888;
			font-size: 13px;
		}
		
	}

`