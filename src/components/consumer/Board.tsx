import styled from 'styled-components';
import Proptypes from 'prop-types';

interface BoardProps {

}

export const Board = () => {

	return (
		<Container>
			<div className='board-title flex-vertical-center'>
				<span>공지사항</span>
				<div className='sub-title'>큐컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</div>
			</div>
			<div className='board-body'>

			</div>
		</Container>
	)
}

Board.prototype = {

}


const Container = styled.div`
	width: 100%;
	height: auto;
	padding-left: 25px;

	.board-title {
		width: 100%;
		height: 100px;
		padding-top: 50px;
		font-size: 1.4rem;
		font-weight: bold;

		.sub-title {
			padding-left: 20px;
			font-size: 14px;
			color: #b1b1b1;
		}
	}

	.board-body {
		width: 100%;
		height: auto;

		.content {
			width: 100%;
		}
	}
`