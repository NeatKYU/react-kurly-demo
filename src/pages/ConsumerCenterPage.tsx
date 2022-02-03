import styled from 'styled-components';
import Proptypes from 'prop-types';

import { SideBar } from '@components/consumer/SideBar';
import { Board } from '@components/consumer/Board';

interface ConsumerCenterPageProps {

}

export const ConsumerCenterPage = () => {

	return (
		<Container>
			<SideBar/>
			<Board/>
		</Container>
	)
}

ConsumerCenterPage.prototype = {

}

const Container = styled.div`
	width: 1000px;
	height: auto;
	display: flex;
	margin: 0 auto;
`