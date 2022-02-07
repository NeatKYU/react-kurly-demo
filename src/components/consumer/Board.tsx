import styled from 'styled-components';
import Proptypes from 'prop-types';

interface BoardProps {
	titleObj: any;
}

export const Board = (props: BoardProps) => {

	const { titleObj } = props;

	return (
		<Container>
			<div className='board-title flex-vertical-center'>
				<span>{titleObj.title}</span>
				<div className='sub-title'>{titleObj.subTitle}</div>
			</div>
			<div className='board-body'>
				<div className='content-header flex-all-center'>
					<div className='head-number'>번호</div>
					<div className='title'>제목</div>
					<div className='writer'>작성자</div>
					<div className='date'>작성일</div>
					<div className='count'>조회수</div>
				</div>
				<div className='content flex-all-center'>
					<div className='head-number'></div>
					<div className='title'></div>
					<div className='writer'></div>
					<div className='date'></div>
					<div className='count'></div>
				</div>
			</div>
		</Container>
	)
}

Board.prototype = {

}


const Container = styled.div`
	width: 100%;
	height: auto;

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
		font-size: 11px;

		.content-header {
			width: 100%;
			height: 50px;
			border-top: 2px solid purple;
			border-bottom: 2px solid black;
			text-align: center;


			//나중에 더 좋은 방법으로 고쳐봐야할듯
			.head-number {
				width: 8%;
			}
			.title {
				width: 57%;
			}
			.writer {
				width: 12%;
			}
			.date {
				width: 13%;
			}
			.count {
				width: 10%;
			}
		}

		.content {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid lightgray;
		}

	}
`