import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles'
import { MdArrowDropDown } from 'react-icons/md';
import { userAtom, isLoginAtom } from '@recoils/User';

interface UserMemuProps {

}

export const UserMemu = () => {

	const [showDropdown, setShowDropdown] = useState(false);
	const user = useRecoilValue(userAtom);
	const isLogin = useRecoilValue(isLoginAtom);

	const classes = useStyles();
	const loginButtonStyles = useLoginButtonStyles();
	const history = useNavigate();

	const consumerCenterList = [
		'공지사항', '자주하는질문', '1:1문의'
	]

	const moveLoginPage = () => {
		history('/login')
	}

	const moveRegisterPage = () => {
		history('/register')
	}

	const loginComponent = (login: boolean) => {
		if(login) {
			return(
				<div className='flex-all-center'>
					<div className='welcome-box flex-all-center'>웰컴</div>
					<div className='userinfo-section'>
						{user.user_name}님
					</div>
					<MdArrowDropDown/>
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
				<Dropdown show={showDropdown} onClick={() => setShowDropdown(!showDropdown)}>
					<div>고객센터</div>
					<MdArrowDropDown/>
					<div className='drop-zone'>
						{
							consumerCenterList.map((item) => (
								<div className='div-item'>{item}</div>
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

interface dropdownProps{
	show: boolean
}

const Dropdown = styled.div<dropdownProps>`
	width: 4rem;
	height: 37px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 12px;
	svg {
		font-size: 1.3rem;
	}
	
	.drop-zone {
		position: absolute;
		top: 37px;
		right: 0;
		width: 5.5rem;
		min-height: 1rem;
		height: auto;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		display: ${(props) => props.show ? '' : 'none'};
		padding: 10px 10px 5px 10px;
		font-size: 11px;
		
		.div-item {
			margin: 0 0 3px 0
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
