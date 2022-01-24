import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';
import Input from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { AddressModal } from '@components/modal/AddressModal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

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

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [address, setAddress] = useState('');

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log('hi');
	}

	const handleOpenModal = () => {
		setIsOpenModal(true)
	}

	const handleCloseModal = () => {
		setIsOpenModal(false);
	}

	const onComplete = () => {
	}

	const inputSettings = {
		width: '20rem',
		height: '2.6rem',
		fontSize: '14px'
	}

	const buttonSettings = {
		width: '7rem',
		height: '2.6rem',
		marginLeft: '10px',
		fontSize: '14px',
		color: '#5f0081',
		border: '1px solid #5f0081',
		':hover': {
			border: '1px solid #5f0081'
		}
	}

	const searchButtonSettings = {
		width: '20rem',
		height: '2.6rem',
		fontSize: '14px',
		color: '#5f0081',
		border: '1px solid #5f0081',
		':hover': {
			border: '1px solid #5f0081'
		}
	}

	return (
		<Container>
			<div className='register-title'>회원가입</div>
			<div className='start-line'/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='content'>
					<div className='label-title'>아이디<span>*</span></div>
					<Input placeholder='아이디' sx={{...inputSettings}} margin='dense'/>
					<Button variant="outlined" sx={{...buttonSettings}}>중복확인</Button>
				</div>
				<div className='content'>
					<div className='label-title'>비밀번호<span>*</span></div>
					<Input placeholder='비밀번호' sx={{...inputSettings}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>비밀번호 확인<span>*</span></div>
					<Input placeholder='비밀번호 확인' sx={{...inputSettings}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>이름<span>*</span></div>
					<Input placeholder='이름' sx={{...inputSettings}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>이메일<span>*</span></div>
					<Input placeholder='이메일' sx={{...inputSettings}} margin='dense'/>
					<Button variant="outlined" sx={{...buttonSettings}}>중복확인</Button>
				</div>
				<div className='content'>
					<div className='label-title'>휴대폰<span>*</span></div>
					<Input placeholder='휴대폰' sx={{...inputSettings}} margin='dense'/>
				</div>
				<div className='content'>
					<div className='label-title'>주소<span>*</span></div>
					<Button 
						variant="outlined" 
						sx={{...searchButtonSettings}} 
						startIcon={<BiSearchAlt2/>}
						onClick={handleOpenModal}
					>
						주소 찾기
					</Button>
				</div>
				<div className='content'>
					<div className='label-title'>성별</div>
					<div className='radio-button'>
						<RadioGroup row>
							<FormControlLabel value="male" control={<Radio />} label="남자" />
							<FormControlLabel value="female" control={<Radio />} label="여자" />
							<FormControlLabel value="nothing" control={<Radio />} label="선택안함" />
						</RadioGroup>
					</div>
				</div>
				<div className='content'>
					<div className='label-title'>생년월일</div>
					<div className='birthday-input'>
						<input type='text' placeholder='YYYY'/>
						<div className='div-block'>/</div>
						<input type='text' placeholder='MM'/>
						<div className='div-block'>/</div>
						<input type='text' placeholder='DD'/>
					</div>
				</div>
				<div className='submit-button-wrapper'>
					<input type='submit' className='submit-button' value='가입하기'/>	
				</div>
			</form>
			<AddressModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}/>
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

		.submit-button-wrapper {
			display: flex;
			justify-content: center;
		}

		.submit-button {
			width: 15rem;
			height: 3rem;
			background-color: #5f0081;
			color: #fff;
			border: none;
			border-radius: 2px;
			cursor: pointer;
			font-weight: bold;
		}

		.content {
			margin-bottom: 1rem;
		}

		.label-title {
			width: 10rem;
			display: inline-block;
			font-size: 13px;
			
			span {
				color: red;
			}
		}

		.radio-button {
			width: 20rem;
			display: inline-block;

		}

		.birthday-input {
			width: 20rem;
			border: 1px solid lightgray;
			border-radius: 3px;
			height: 2.4rem;
			display: inline-flex;
			align-items: center;
			justify-content: center;

			.div-block {
				width: 10px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: lightgray;
			}

			input {
				border: none;
				width: 5rem;
				text-align: center;
				height: 2rem;
				
				&:focus {
					outline: none;
				}
			}

		}
	}

`