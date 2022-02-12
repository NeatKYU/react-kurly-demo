import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import axios from 'axios';
import { useDay } from '@utils/customDay';
import { ErrorMessage } from '@components/shared/ErrorMessage';
import { fullAddressAtom } from '@recoils/Address';
import { useRecoilValue } from 'recoil';

interface IFormInput {
  userId: string;
  password: string;
	passwordCheck: string;
	name: string;
	email: string;
	phone: string;
	address1: string;
	address2: string;
	gender?: '남성' | '여성' | '선택안함';
	birthday?: string;
	addInput?: 0 | 1; 
  age?: number;
	year: string;
	month: string;
	day: string;
}

interface RegisterProps {

}

export const Register = () => {

	const { 
		register, 
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IFormInput>();

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isUserIdCheck, setIsUserIdCheck] = useState(false);
	const [isUserEmailCheck, setIsUserEmailCheck] = useState(false);
	const [genderValue, setGenderValue] = useState('선택안함');
	const userId = watch("userId");
	const email = watch("email");
	const fullAddress = useRecoilValue(fullAddressAtom);
	const [address, setAddress] = useState('');

	const history = useNavigate();
	const { makeBirthDay } = useDay();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		const birthday = makeBirthDay(data.year, data.month, data.day);
		const registerInputData = {
			id: data.userId,
			password: data.password,
			email: data.email,
			user_name: data.name,
			phone_number: data.phone,
			address1: data.address1,
			address2: data.address2,
			birthday: birthday,
			gender: genderValue,
		}

		if(!isUserIdCheck) {
			alert('아이디 중복체크 해주세요')
			return;
		} else if(!isUserEmailCheck){
			alert('이메일 중복체크 해주세요')
			return;
		}

		const response = await axios.post('api/user/register', registerInputData)

		if(response.data.success){
			alert('회원가입을 축하드립니다.');
			history('/');
		}
	}

	const handleOpenModal = () => {
		setIsOpenModal(true)
	}

	const handleCloseModal = () => {
		setIsOpenModal(false);
	}

	const handleIdCheck = async (user_id: string) => {
		const data = {
			id: user_id
		}
		const response = await axios.post('api/user/register/id', data);
		if(response.data.count === 0){
			setIsUserIdCheck(true);
			alert("아이디 사용가능합니다.")
		} else {
			alert("다른 아이디를 사용해주세요.");
		}
	}

	const handleEmailCheck = async (email: string) => {
		const data = {
			email: email
		}
		if(!email) return alert("메일을 입력해주세요");

		const response = await axios.post('api/user/register/email', data);
		if(response.data.count === 0){
			setIsUserEmailCheck(true);
			alert("이메일 사용가능합니다.")
		} 
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderValue((event.target as HTMLInputElement).value);
  };

	//email, userId 체크 변수 다시 돌리기
	useEffect(() => {
		setIsUserIdCheck(false);
	}, [userId])

	useEffect(() => {
		setIsUserEmailCheck(false);
	}, [email])

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
					<div className='content-input'>
						<Input 
							{...register('userId', {required: true, pattern: {
								value: /^[a-z]{1}[a-z0-9]{6,19}$/g,
								message: '숫자와 영문 조합으로 해주세요'
							}})} 
							placeholder='아이디' 
							sx={{...inputSettings}} 
							margin='dense'
						/>
						<div className='error-zone'>
							{errors.userId?.message && <ErrorMessage message={errors.userId.message} styledHeight='30px'/>}
						</div>
					</div>
					<Button variant="outlined" onClick={() => handleIdCheck(userId)} sx={{...buttonSettings}}>중복확인</Button>
				</div>
				<div className='content'>
					<div className='label-title'>비밀번호<span>*</span></div>
					<div className='content-input'>
						<Input 
							placeholder='비밀번호'
							type='password'
							{...register('password', {
								required: true,
								pattern: {
									value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#@$!%*?&])[A-Za-z\d$#@$!%*?&]{8,20}$/g,
									message: '대소문자 하나이상 특수문자 하나이상 8자이상'
								},
							})} 
							sx={{...inputSettings}} 
							margin='dense'
						/>
						<div className='error-zone'>
							{errors.password?.message && <ErrorMessage message={errors.password.message} styledHeight='30px'/>}
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='label-title'>비밀번호 확인<span>*</span></div>
					<div className='content-input'>
						<Input 
							placeholder='비밀번호 확인' 
							type='password'
							{...register('passwordCheck', {
								required: true,
								validate: {
									positive: () => watch('password') === watch('passwordCheck')
								}
							})} 
							sx={{...inputSettings}} 
							margin='dense'
						/>
						<div className='error-zone'>
							{errors.passwordCheck && <ErrorMessage message='동일한 비밀번호를 입력하세요.' styledHeight='30px'/>}
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='label-title'>이름<span>*</span></div>
					<div className='content-input'>
						<Input 
							placeholder='이름' 
							{...register('name', {
								required: true,
								minLength: {
									value: 1,
									message: '뭐라도 입력해주세요.'
								}
							})} 
							sx={{...inputSettings}} 
							margin='dense'
						/>
						<div className='error-zone'>
							{errors.name?.message && <ErrorMessage message={errors.name.message} styledHeight='30px'/>}
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='label-title'>이메일<span>*</span></div>
					<div className='content-input'>
						<Input {...register('email', {required: true})} type='email' placeholder='이메일' sx={{...inputSettings}} margin='dense'/>
						<div className='error-zone'></div>
					</div>
					<Button variant="outlined" onClick={() => handleEmailCheck(email)} sx={{...buttonSettings}}>중복확인</Button>
				</div>
				<div className='content'>
					<div className='label-title'>휴대폰<span>*</span></div>
					<div className='content-input'>
						<Input 
							placeholder='휴대폰'
							{...register('phone', {
								required: true,
								pattern: {
									value: /^[0-9]*$/,
									message: '숫자만 입력하세요'
								},
								minLength: {
									value: 9,
									message: '번호를 정확히 입력해주세요.' 
								}
							})} 
							sx={{...inputSettings}} 
							margin='dense'
						/>
						<div className='error-zone'>
							{errors.phone?.message && <ErrorMessage message={errors.phone.message} styledHeight='30px'/>}
						</div>
					</div>
					<Button 
						variant="outlined" 
						disabled={watch('phone', '').length <= 6 ? true : errors.phone?.message ? true : false} 
						sx={{...buttonSettings}}
					>
						인증번호 받기
					</Button>
				</div>
				<div className='content'>
					<div className='label-title'>주소<span>*</span></div>
					<div className='content-input'>
						{!fullAddress && 
							<Button 
								variant="outlined" 
								sx={{...searchButtonSettings}} 
								startIcon={<BiSearchAlt2/>}
								onClick={handleOpenModal}
							>
								주소 찾기
							</Button>
						}
						{fullAddress && 
						<>
							<Input 
								placeholder='본 주소'
								value={fullAddress}
								{...register('address1', {
									required: true,
								})} 
								sx={{...inputSettings, marginTop: '5px'}} 
								margin='dense'
							/>
							<Input 
								placeholder='상세 주소'
								{...register('address2', {
									required: true,
								})} 
								sx={{...inputSettings, marginTop: '5px'}} 
								margin='dense'
							/>
						</>
						}
						<div className='error-zone'></div>
					</div>
					{fullAddress && 
						<Button 
							variant="outlined" 
							sx={{...buttonSettings}} 
							startIcon={<BiSearchAlt2/>}
							onClick={handleOpenModal}
						>
							재검색
						</Button>
					}
				</div>
				<div className='content'>
					<div className='label-title'>성별</div>
					<div className='content-input'>
						<div className='radio-button'>
							<RadioGroup row value={genderValue} onChange={handleChange}>
								<FormControlLabel {...register('gender')} value="남자" control={<Radio />} label="남자" />
								<FormControlLabel {...register('gender')} value="여자" control={<Radio />} label="여자" />
								<FormControlLabel {...register('gender')} value="선택안함" control={<Radio />} label="선택안함" />
							</RadioGroup>
						</div>
						<div className='error-zone'></div>
					</div>
				</div>
				<div className='content'>
					<div className='label-title'>생년월일</div>
					<div className='content-input'>
						<div className='birthday-input'>
							<input 
								type='text' 
								placeholder='YYYY' 
								maxLength={4}
								{...register('year', { 
									required: true, 
									pattern:{ 
										value: /^[0-9]*$/, 
										message: '숫자만 입력해주세요'
									},
									minLength: {
										value: 4,
										message: '년도를 정확히 써주세요'
									}
								})}
							/>
							<div className='div-block'>/</div>
							<input type='text' placeholder='MM' maxLength={2} {...register('month', {required: true, maxLength: 2})}/>
							<div className='div-block'>/</div>
							<input type='text' placeholder='DD' maxLength={2} {...register('day', {required: true, maxLength: 2})}/>
						</div>
						<div className='error-zone'>
							{errors.year?.message ? <ErrorMessage message={errors.year.message} styledHeight='30px'/> : ""}
						</div>
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
			margin: 20px 0 0 0;
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
			
			.content-input {
				display: inline-flex;
				flex-direction: column;
			}
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