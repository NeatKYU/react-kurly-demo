import styled from 'styled-components';
import Proptypes from 'prop-types';

interface CustomButtonProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
	label?: string;
	color?: string;
	startIcon?: React.ReactElement;
	endIcon?: React.ReactElement;
	onClick?: () => void;
}

export const CustomButton = (props: CustomButtonProps) => {

	const { 
		width, height, 
		backgroundColor, label, color, 
		startIcon, endIcon,
		onClick
	} = props;

	return (
		<Container onClick={onClick} style={{width: width, height: height, backgroundColor: backgroundColor, color: color || 'black'}}>
			{startIcon}
			<span>{label}</span>
			{endIcon}
		</Container>
	)
}

CustomButton.propTypes= {
	width: Proptypes.number.isRequired,
	height: Proptypes.number.isRequired,
	backgroundColor: Proptypes.string.isRequired,
	label: Proptypes.string.isRequired,
	color: Proptypes.string,
}

CustomButton.defaultProps = {
	width: '100px',
	height: '50px',
	backgroundColor: '#fff',
	label: '',
	color: 'black',
	startIcon: '',
	endIcon: '',
}

const Container = styled.div`
	font-size: 1.2rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;

	svg {
		margin: 0 5px 0 5px;
	}
	
`