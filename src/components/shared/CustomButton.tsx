import styled from 'styled-components';
import Proptypes from 'prop-types';

interface CustomButtonProps {
	width: number;
	height: number;
	backgroundColor: string;
	label: string;
}

export const CustomButton = (props: CustomButtonProps) => {

	const { width, height, backgroundColor, label } = props;

	return (
		<Container width={width} height={height}>
		</Container>
	)
}

CustomButton.prototype = {
	width: Proptypes.number,
	height: Proptypes.number,
}

const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height}
`