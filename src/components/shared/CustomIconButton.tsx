import styled from 'styled-components';
import Proptypes from 'prop-types';

interface CustomIconButtonProps {
	icon: any;
	color: string;
}

export const CustomIconButton = (props: CustomIconButtonProps) => {

	const { icon, color } = props;

	return (
		<Container color={color}>
			{icon}
		</Container>
	)
}

CustomIconButton.prototype = {

}

const Container = styled.div`
	width: 50px;
	height: 50px;
	border: 1px solid lightgray;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.6rem;
	color: ${(props) => props.color};
	cursor: pointer;
`