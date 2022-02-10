import styled from 'styled-components';
import Proptypes from 'prop-types';

interface ErrorMessageProps {
	message: string;
	styledWidth: string;
	styledHeight: string;
	backgroundColor: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {

	const { message, styledWidth, styledHeight, backgroundColor } = props;

	console.log(styledWidth, backgroundColor)

	return (
		<Container 
			className='flex-all-center' 
			styledWidth={styledWidth} 
			styledHeight={styledHeight}
			backgroundColor={backgroundColor}
		>
			{message}
		</Container>
	)
}

ErrorMessage.propTypes = {
	message: Proptypes.string.isRequired,
	styledWidth: Proptypes.string,
	styledHeight: Proptypes.string,
	backgroundColor: Proptypes.string,
}

ErrorMessage.defaultProps = {
	message: '',
	styledWidth: '100%',
	styledHeight: '50px',
	backgroundColor: '#5f0081',
}

const Container = styled.div<{styledWidth: string, styledHeight: string, backgroundColor: string}>`
	width: ${(props) => props.styledWidth};
	height: ${(props) => props.styledHeight};
	border-radius: 5px;
	color: #fff;
	background-color: ${(props) => props.backgroundColor};
`