import styled from 'styled-components';
import Proptypes from 'prop-types';

import { FaPlus, FaMinus } from 'react-icons/fa'

interface CountButtonProps {
	incrementFunction: any;
	decrementFunction: any;
	currentCount: number;
}

export const CountButton = (props: CountButtonProps) => {

	const { incrementFunction, decrementFunction, currentCount } = props;

	return (
		<Container>
			<div className='custom-button' onClick={decrementFunction}>
				<FaMinus/>
			</div>
			<div className='count-section'>
				{currentCount}	
			</div>
			<div className='custom-button' onClick={incrementFunction}>
				<FaPlus/>
			</div>
		</Container>
	)
}

CountButton.prototype = {
	incrementFunction: Proptypes.func.isRequired,
	decrementFunction: Proptypes.func.isRequired,
	currentCount: Proptypes.number.isRequired,
}

const Container = styled.div`
	width: 90px;
	height: 30px;

	display: flex;
	border: 2px solid gray;
	border-radius: 5px;

	.custom-button {
		width: 30%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		cursor: pointer;

	}

	.count-section {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

`