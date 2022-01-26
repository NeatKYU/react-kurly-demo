import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Login } from '@components/login/Login';

interface LoginPageProps {

}

export const LoginPage = () => {

return (
	 <Container>
	 	<Login/>
	 </Container>
 )
}

LoginPage.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 10px;
	display: flex;
	justify-content: center;
`