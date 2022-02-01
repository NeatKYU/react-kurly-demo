import styled from 'styled-components';
import Proptypes from 'prop-types';

interface CustomButtonProps {
	width: number;
	height: number;
	backgroundColor: string;
	label: string;
	color: string;
}

export const CustomButton = (props: CustomButtonProps) => {

	const { width, height, backgroundColor, label, color } = props;

	return (
		<Container style={{width: width, height: height, backgroundColor: backgroundColor, color: color || 'black'}}>
			<span>{label}</span>
		</Container>
	)
}

CustomButton.prototype = {
	width: Proptypes.number.isRequired,
	height: Proptypes.number.isRequired,
	backgroundColor: Proptypes.string.isRequired,
	label: Proptypes.string.isRequired,
	color: Proptypes.string,
}

const Container = styled.div`
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	
`