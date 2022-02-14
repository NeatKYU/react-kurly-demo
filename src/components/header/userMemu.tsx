import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles'
import { MdArrowDropDown } from 'react-icons/md';
import { userAtom, isLoginAtom, userMenuAtom } from '@recoils/User';
import { useUserAction } from '@actions/user.action';

interface UserMemuProps {

}

export const UserMemu = () => {

	const user = useRecoilValue(userAtom);
	const isLogin = useRecoilValue(isLoginAtom);
	const setUserMenu = useSetRecoilState(userMenuAtom);
	const { logout } = useUserAction();

	const classes = useStyles();
	const loginButtonStyles = useLoginButtonStyles();
	const history = useNavigate();

	const consumerCenterList = [
		'공지사항', '자주하는질문', '1:1문의'
	]
	
	const myServiceList = [
		'주문내역', '찜한상품', '배송지관리', '개인정보수정'
	]

	const moveLoginPage = () => {
		history('/login')
	}

	const moveRegisterPage = () => {
		history('/register')
	}

	const moveMyPage = (index: number) => {
		setUserMenu(index)
		history('/mypage')
	}

	const handleLogout = () => {
		logout();
		history('/');
	}

	const loginComponent = (login: boolean) => {
		if(login) {
			return(
				<div className='flex-all-center'>
					<Dropdown>
						<div className='welcome-box flex-all-center'>웰컴</div>
						<div className='userinfo-section'>
							{user.user_name}님
						</div>
						<MdArrowDropDown/>
						<div className='drop-zone'>
							{
								myServiceList.map((item, idx) => (
									<div className='div-item' key={idx} onClick={() => moveMyPage(idx+1)}>{item}</div>
								))
							}
							<div className='div-item' onClick={handleLogout}>로그아웃</div>
						</div>
					</Dropdown>
				</div>
			)
		} else {
			return (
				<>
					<Button 
						variant='text' 
						size='small' 
						className={classes.root}
						onClick={moveRegisterPage}
					>
						회원가입
					</Button>
					<Button 
						variant='text' 
						size='small' 
						className={loginButtonStyles.root}
						onClick={moveLoginPage}
					>
						로그인
					</Button>
				</>
			)
		}
	}

	return (
		<Container>
			<Stack direction='row' justifyContent='flex-end'>
				{loginComponent(isLogin)}
				<Dropdown>
					<div onClick={() => history('/consumer')}>고객센터</div>
					<MdArrowDropDown/>
					<div className='drop-zone'>
						{
							consumerCenterList.map((item, idx) => (
								<div key={idx} className='div-item'>{item}</div>
							))
						}
					</div>
				</Dropdown>
			</Stack>
		</Container>
	)
}

UserMemu.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 37px;

	.userinfo-section {
		font-size: 12px;
	}

	.welcome-box {
		width: 40px;
		height: 15px;
		background-color: #fff;
		border-radius: 10px;
		border: 1px solid lightgray;
		font-size: 10px;
	}
	svg {
		font-size: 1.3rem;
	}
`

const Dropdown = styled.div`
	min-width: 4rem;
	width: auto;
	height: 37px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 12px;
	
	svg {
		font-size: 1.3rem;
	}

	&:hover {
		.drop-zone {
			display: initial;
		}
	}
	
	.drop-zone {
		position: absolute;
		top: 37px;
		right: 8px;
		width: 5.5rem;
		min-height: 1rem;
		height: auto;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		display: none;
		padding: 10px 10px 5px 10px;
		font-size: 11px;
		z-index: 101;
		
		.div-item {
			margin: 0 0 4px 0;
			cursor: pointer;
		}
	}
`

const useStyles = makeStyles({
	root: {
		'&.MuiButton-text': {
			color: '#a058f1'
		},
		'&.MuiButton-root': {
			fontSize: '12px'
		},
		// fontSize: '10px !important'
	}
})

const useLoginButtonStyles = makeStyles({
	root: {
		'&.MuiButton-text': {
			color: '#505050'
		},
		'&.MuiButton-root': {
			fontSize: '12px'
		}
	}
})
