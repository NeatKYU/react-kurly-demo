import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { SideBar } from '@components/shared/SideBar';
import { MyPageBoard } from '@components/mypage/MyPageBoard';

import { userMenuAtom } from '@recoils/User';

interface MyPageProps {

}

export const MyPage = () => {

	const [userMenu, setUserMenu] = useRecoilState(userMenuAtom);
	const menuList = [
		{
			title: '주문내역',
			subTitle: '최근 3년간의 주문내역이 저장됩니다.',
			emptyMessage: '주문한 내용이 없습니다.',
		},{
			title: '찜한상품',
			subTitle: '찜한상품은 최대 200개 까지 저장 가능합니다.',
			emptyMessage: '찜한 상품이 없습니다.',
		},{
			title: '배송지관리',
			subTitle: '배송지를 관리해보세요 여러개 등록가능합니다.',
			emptyMessage: '배송지가 없습니다. 등록해주세요',
		},{
			title: '개인정보수정',
			subTitle: '개인정보는 소중하니까요.',
			emptyMessage: '',
		}
		
	]

	return (
		<Container>
			<SideBar setRoute={setUserMenu} menuList={menuList} title='마이컬리'/>
			<div className='board-section'>
				<MyPageBoard titleObj={menuList[userMenu-1]} route={userMenu}/>
			</div>
		</Container>
	)
}

MyPage.propTypes = {

}

const Container = styled.div`
	width: 1000px;
	height: auto;
	margin: 0 auto;
	display: flex;

	.board-section {
		width: 100%;
		height: auto;
		margin-left: 25px;
	}
`