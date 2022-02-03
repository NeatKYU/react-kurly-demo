import styled from 'styled-components';
import Proptypes from 'prop-types';

import { IoIosArrowForward } from 'react-icons/io'

interface SideBarProps {

}

export const SideBar = () => {

	return (
		<Container>
			<div className='sidebar-title'>고객센터</div>
			<div className='sidebar-nav'>
				<div className='menu'>공지사항<IoIosArrowForward/></div>
				<div className='menu'>자주하는 질문<IoIosArrowForward/></div>
				<div className='menu'>1:1문의<IoIosArrowForward/></div>
			</div>
			<div className='box'/>
			<div className='help-button flex-all-center'>
				<div className='title'>
					<span className='main'>도움이 필요하신가요?</span>
					<span className='sub'>1:1문의 하기</span>
				</div>
				<div className='icon-section'><IoIosArrowForward/></div>
			</div>
		</Container>
	)
}

SideBar.prototype = {

}

const Container = styled.div`
	max-width: 300px;
	min-width: 200px;
	min-height: 400px;
	height: auto;

	.sidebar-title {
		width: 100%;
		height: 100px;
		font-size: 1.5rem;
		padding-top: 55px;
		padding-left: 10px;
	}

	.sidebar-nav {
		width: 100%;
		height: auto;
		border-left: 1px solid #e9e9e9;
		border-top: 1px solid #e9e9e9;

		.menu {
			width: 100%;
			height: 40px;
			/* border: 1px solid gray; */
			border-right: 1px solid #e9e9e9;
			border-bottom: 1px solid #e9e9e9;
			border-collapse: collapse;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 1rem;
			padding-right: 1rem;
			font-size: 14px;
			cursor: pointer;

			&:hover {
				color: #a058f1;
				background-color: #fafafa;
			}
		}
	}

	.help-button {
		width: 100%;
		height: 50px;
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;
		background-color: #f8f8f8;
		cursor: pointer;
		
		.title {
			width: 80%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.main {
				color: #3b3b3b;
				font-size: 14px;
			}

			.sub {
				font-size: 13px;
				color: #7e7e7e;
			}
		}
		.icon-section {
			color: #a058f1;
		}

	}

`