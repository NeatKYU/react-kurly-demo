import styled from 'styled-components';
import Proptypes from 'prop-types';
import { FaReact } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

interface LogoLayoutProps {

}

export const LogoLayout = () => {

	const history = useNavigate();

	const moveToHome = () => {
		history('/')
	}

return (
	 <Container>
			<FaReact onClick={moveToHome}/>
			<div>kyu kurly</div>
	 </Container>
 )
}

LogoLayout.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 63px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	svg {
		font-size: 3rem;
		cursor: pointer;
	}
`