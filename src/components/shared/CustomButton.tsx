import styled from 'styled-components';
import Proptypes from 'prop-types';

interface CustomButtonProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
	label?: string;
	color?: string;
	borderColor?: string;
	fontSize?: string;
	startIcon?: React.ReactElement;
	endIcon?: React.ReactElement;
	onClick?: () => void;
}

export const CustomButton = (props: CustomButtonProps) => {

	const { 
		width, height, 
		backgroundColor, label, color, borderColor, fontSize,
		startIcon, endIcon,
		onClick
	} = props;

	return (
		<Container onClick={onClick} 
			style={{
				width: width, 
				height: height, 
				backgroundColor: backgroundColor, 
				color: color || 'black',
				borderColor: borderColor || 'white',
				fontSize: fontSize || '1.2rem'
			}}
		>
			{startIcon}
			<span>{label}</span>
			{endIcon}
		</Container>
	)
}

CustomButton.propTypes= {
	width: Proptypes.string.isRequired,
	height: Proptypes.string.isRequired,
	backgroundColor: Proptypes.string.isRequired,
	label: Proptypes.string.isRequired,
	color: Proptypes.string,
	borderColor: Proptypes.string,
	fontSize: Proptypes.string,
}

CustomButton.defaultProps = {
	width: '100px',
	height: '50px',
	backgroundColor: '#fff',
	label: '',
	color: 'black',
	borderColor: 'white',
	fontSize: '1.2rem',
	startIcon: '',
	endIcon: '',
}

const Container = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	border: 1px solid white;
	cursor: pointer;

	svg {
		margin: 0 5px 0 5px;
	}
	
`