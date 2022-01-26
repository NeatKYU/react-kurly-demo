import styled from 'styled-components';
import Proptypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { LoginButtonSet } from '@components/login/LoginButtonSet';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';

interface LoginProps {

}

export const Login = () => {

	const { 
		register, 
		handleSubmit, 
		formState: { errors }
	} = useForm();

	const history = useNavigate();

	const onSubmit = () => {
		console.log('hi')
	}

	const moveRegisterPage = () => {
		history('/register')
	}

	return (
		<Container>
			<div className='login-title'>로그인</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField 
					{...register('name', {required: true})} 
					id="outlined-basic" 
					label="아이디" 
					variant="outlined"
					error={errors.name}
					margin="dense"
					fullWidth
				/>
				<TextField 
					{...register('password', {required: true})} 
					id="outlined-basic"
					label="비밀번호" 
					variant="outlined" 
					error={errors.password}
					margin="dense"
					fullWidth
				/>
				<LoginButtonSet/>
				<input className='submit-button' type='submit' value='로그인' />
				<button className='register-button' onClick={moveRegisterPage}>
					회원가입
				</button>
			</form>
		</Container>
	)
}

Login.prototype = {

}

const Container = styled.div`
	width: 20rem;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.login-title {
		font-size: 1.4rem;
		font-weight: bold;
		height: 5rem;
		display: flex;
		align-items: center;
	}

	.submit-button {
		width: 100%;
		height: 56px;
		background-color: #5f0081;
		color: white;
		border-radius: 2px;
		border: 0px;
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.register-button {
		width: 100%;
		height: 56px;
		background-color: #fff;
		color: #5f0081;
		border-radius: 2px;
		font-size: 1rem;
		font-weight: bold;
		border: 1px solid #5f0081;
	}
	
`