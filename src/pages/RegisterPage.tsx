import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Register } from '@components/register/Register';

interface RegisterPageProps {

}

export const RegisterPage = () => {

	return (
		<Conatiner>
			<Register/>
		</Conatiner>
	)
}

RegisterPage.prototype = {

}

const Conatiner = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;

`