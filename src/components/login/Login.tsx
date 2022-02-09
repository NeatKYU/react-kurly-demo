import styled from 'styled-components';
import Proptypes from 'prop-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginButtonSet } from '@components/login/LoginButtonSet';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { authAtom } from '@recoils/Auth';
import { isLoginAtom, userAtom } from '@recoils/User';

interface LoginProps {

}

interface FormData {
	id: string,
	password: string,

}

export const Login = () => {

	const { 
		register, 
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormData>();

	const setAuth = useSetRecoilState(authAtom);
	const auth = useRecoilValue(authAtom);
	const setIsLogin = useSetRecoilState(isLoginAtom);
	const setUser = useSetRecoilState(userAtom);

	const history = useNavigate();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		await axios.post('/api/user/login', data).then(
			(res) => {
				if(res.data.status){
					sessionStorage.setItem('user', JSON.stringify(res.data.data))
					setAuth(res.data.data)
					setUser(res.data.data)
					setIsLogin(true)
					console.log(res.data.data)
					history('/')
				} else {
					console.log(res.data.errorMessage)
				}
			}
		)
	}

	const moveRegisterPage = () => {
		history('/register')
	}

	console.log(auth)

	return (
		<Container>
			<div className='login-title'>로그인</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField 
					{...register('id', {required: true})} 
					id="outlined-basic" 
					label="아이디" 
					variant="outlined"
					// error={errors.name}
					margin="dense"
					fullWidth
				/>
				{errors.id && '아이디를 입력해주세요'}
				<TextField 
					{...register('password', {required: true})} 
					id="outlined-basic"
					label="비밀번호" 
					variant="outlined" 
					// error={errors.password}
					margin="dense"
					fullWidth
				/>
				{errors.password && '비밀번호를 입력해주세요'}
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