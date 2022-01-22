import styled from 'styled-components';
import Proptypes from 'prop-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@mui/material/OutlinedInput';

interface IFormInput {
  userId: string;
  password: string;
	passwordCheck: string;
	name: string;
	email: string;
	phone: string;
	address: string;
	male?: '남성' | '여성' | '선택안함';
	birthday?: string;
	addInput?: 0 | 1; 
  age: number;
}

interface RegisterProps {

}

export const Register = () => {

	const { 
		register, 
		handleSubmit, 
		formState: { errors }
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log('hi');
	}

	return (
		<Container>
			<div className='register-title'>회원가입</div>
			<div className='start-line'/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='content'>
					<div className='label-title'>아이디</div>
					<Input placeholder='아이디' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>비밀번호</div>
					<Input placeholder='비밀번호' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>비밀번호 확인</div>
					<Input placeholder='비밀번호 확인' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>이름</div>
					<Input placeholder='이름' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>이메일</div>
					<Input placeholder='이메일' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>휴대폰</div>
					<Input placeholder='이메일' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>주소</div>
					<Input placeholder='이메일' sx={{width: '20rem', height: '2.6rem'}} margin='dense'/>
				</div>
			</form>
		</Container>
	)
}

Register.prototype = {

}

const Container = styled.div`
	width: 100%;
	max-width: 650px;
	min-width: 624px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.register-title {
		height: 10rem;
		margin-top: 10px;
		padding-bottom: 20px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		font-size: 2rem;
		font-weight: bold;
	}

	.start-line {
		width: 100%;
		background-color: black;
		height: 2px;
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}

	form {
		width: 70%;
		max-width: 650px;
		min-width: 624px;

		.content {
			margin-bottom: 1rem;
		}

		.label-title {
			width: 10rem;
			display: inline-block;
			font-size: 13px;
		}
	}

`