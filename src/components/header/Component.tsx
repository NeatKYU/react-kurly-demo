import styled from 'styled-components';
import Proptypes from 'prop-types';
import { UserMemu } from '@components/header/userMemu';
import { LogoLayout } from '@components/header/logoLayout';
import { GrobalMenu } from '@components/header/GrobalMenu';

interface HeaderComponentProps {

}

export const HeaderComponent = () => {

return (
	 <Container>
	 	<UserMemu/>
		<LogoLayout/>
		<GrobalMenu/>
	 </Container>
 )
}

HeaderComponent.prototype = {

}

const Container = styled.div`
	width: 100%;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`