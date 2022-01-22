import styled from 'styled-components';
import Proptypes from 'prop-types';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'

interface LoginButtonSetProps {

}

export const LoginButtonSet = () => {

	return (
		<Container>
			<div className='security-checkbox'>
				{/* <BiCheckbox/> */}
				<BiCheckboxChecked/>
				<span>보안접속</span>
			</div>
			<div className='search-container'>
				<span>아이디 찾기</span>
				<div className='kan'>|</div>
				<span>비밀번호 찾기</span>
			</div>
		</Container>
	)
}

LoginButtonSet.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	padding-top: 5px;
	box-sizing: border-box;

	.security-checkbox {
		width: 45%;
		display: flex;
		font-size: 14px;

		svg, span {
			cursor: pointer;
		}
	}

	.search-container {
		width: 50%;
		display: flex;
		font-size: 13px;
		justify-content: flex-end;

		span {
			cursor: pointer;
		}

		.kan {
			margin-left: 5px;
			margin-right: 5px;
		}
	}

	svg {
		font-size: 1.3rem;
	}

`