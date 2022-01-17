import styled from 'styled-components';
import Proptypes from 'prop-types';
import { FaReact } from 'react-icons/fa'

interface LogoLayoutProps {

}

export const LogoLayout = () => {

return (
	 <Container>
		 <FaReact/>
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
	}
`