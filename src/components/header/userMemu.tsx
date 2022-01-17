import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles'
import { MdArrowDropDown } from 'react-icons/md';

interface UserMemuProps {

}

export const UserMemu = () => {

	const [showDropdown, setShowDropdown] = useState(false);

	const classes = useStyles();
	const loginButtonStyles = useLoginButtonStyles();

	return (
		<Container>
			<Stack direction='row' justifyContent='flex-end'>
				<Button variant='text' size='small' className={classes.root}>
					회원가입
				</Button>
				<Button variant='text' size='small' className={loginButtonStyles.root}>
					로그인
				</Button>
				<Dropdown show={showDropdown} onClick={() => setShowDropdown(!showDropdown)}>
					<div>고객센터</div>
					<MdArrowDropDown/>
					<div className='drop-zone'></div>
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
	
	.drop-zone {
		position: absolute;
		top: 37px;
		right: 0;
		width: 5rem;
		min-height: 1rem;
		height: auto;
		background-color: #86b5df;
		display: ${(props) => props.show ? '' : 'none'};
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
