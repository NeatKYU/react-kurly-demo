import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface NoticeProps {
	titleTitle: string,
	titleBody: any,
	bodyList?: any,
	closeButton?: boolean,
}

export const Notice = (props: NoticeProps) => {

	const { titleTitle, titleBody, bodyList, closeButton } = props;

	const [isOpen, setIsOpen] = useState(false);

	const handleCloseButton = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Conatiner>
			<div className='product-notice-header'>
				<div className='title flex-all-center'>
					{titleTitle}
				</div>
				<div className='body flex-vertical-center'>
					{titleBody}
				</div>
				{
					closeButton ? 
					<div className='close-button' onClick={handleCloseButton}>
						{ isOpen ? '자세히 보기' : '닫기' }
						{ isOpen ? <IoIosArrowDown/> : <IoIosArrowUp/> }
					</div> : ''
				}
			</div>
				{
					bodyList && !isOpen && bodyList.map((item: any, idx: number) => (
						<>
							<div key={idx} className='product-notice-body'>
								<div className='title'>{item.title}</div>
								<div className='body'>
								{
									item.body.map((bodyItem: any) => (
										<>{bodyItem}</>
									))
								}
								</div>
							</div>
							{idx < bodyList.length-1 ? <div className='divider'/> : ''}
						</>
					))
				}
				
		</Conatiner>
	)
}

Notice.prototype = {

}

const Conatiner = styled.div`
	width: 100%;
	height: auto;

	.product-notice-header {
		width: 100%;
		min-height: 50px;
		height: auto;
		display: flex;
		border: 1px solid gray;
		
		.title {
			width: 20%;
			font-size: 1.2rem;
			color: #a058f1;
		}

		.body {
			width: 60%;
			color: #494949;
			
		}

		.close-button {
			width: 10%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: auto;
			cursor: pointer;
			color: #a058f1;
			svg {
				font-size: 1.2rem;
			}
		}

	}

	.product-notice-body {
		width: 100%;
		min-height: 200px;
		height: auto;
		display: flex;
		padding-top: 30px;
		padding-bottom: 30px;

		.title {
			width: 30%;
			height: 100%;
			padding-left: 20px;
			font-weight: bold;
		}

		.body {
			width: 70%;
			height: 100%;
			padding-right: 4rem;
			color: #a8a8a8;
		}
	}

	.divider {
		width: 98%;
		height: 1px;
		background-color: #e7e7e7;
		margin: 0 auto;
	}
`