import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import { SideBar } from '@components/consumer/SideBar';
import { Board } from '@components/consumer/Board';
import Pagination from '@mui/material/Pagination';

interface ConsumerCenterPageProps {

}

export const ConsumerCenterPage = () => {

	const [currentRoute, setCurrentRoute] = useState(1);
	const menuList = [
		{
			title: '공지사항',
			subTitle: '큐컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.'
		},{
			title: '자주하는 질문',
			subTitle: '자주하는 질문입니다.~'
		},{
			title: '1:1문의',
			subTitle: '1:1문의 입니다.~'
		},
		
	]

	return (
		<Container>
			<SideBar setRoute={setCurrentRoute}/>
			<div className='board-section'>
				<Board titleObj={menuList[currentRoute-1]}/>
				<Pagination 
					style={{padding: '40px 0 30px 25px', justifyContent: 'center'}}
					count={10} variant="outlined" shape="rounded" 
				/>
				<div className='endline'/>
			</div>
		</Container>
	)
}

ConsumerCenterPage.prototype = {

}

const Container = styled.div`
	width: 1000px;
	height: auto;
	display: flex;
	margin: 0 auto;

	.board-section {
		width: 100%;
		height: auto;
		padding-left: 25px;

		.endline {
			width: 100%;
			height: 1px;
			background-color: purple;
			box-sizing: border-box;
		}
	}
`