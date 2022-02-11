import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

interface CustomSelectBoxProps {
	selectList: any;
	styleWidth: string;
	styleHeight: string;
}

export const CustomSelectBox = (props: CustomSelectBoxProps) => {

	const { selectList, styleHeight, styleWidth } = props;

	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(selectList[0])

	const handleSelected = (item: string) => {
		setSelected(item);
		setIsOpen(false)
	}

	useEffect(() => {
		setSelected(selectList[0])
	}, [])

	return (
		<Container 
			styleWidth={styleWidth} 
			styleHeight={styleHeight} 
			isOpen={isOpen}
		>
			<div 
				className='select-value' 
				onClick={() => setIsOpen(!isOpen)}
			>
				{selected}
			</div>
			{isOpen ? <MdArrowDropUp onClick={() => setIsOpen(!isOpen)}/> : <MdArrowDropDown onClick={() => setIsOpen(!isOpen)}/>}
			<div className='drop'>
				{selectList && selectList.map((item: string) => (
					<div onClick={() => handleSelected(item)}>{item}</div>
				))}
			</div>
		</Container>
	)
}

CustomSelectBox.prototype = {

}

CustomSelectBox.defaultProps = {
	selectList: ['전체기간', '2021', '2020'],
	styleWidth: '100px',
	styleHeight: '40px',
}

const Container = styled.div<{styleWidth: string, styleHeight: string, isOpen: boolean}>`
	width: ${(props) => props.styleWidth};
	height: ${(props) => props.styleHeight};
	display: inline-flex;
	align-items: center;
	border: 1px solid lightgray;
	position: relative;
	cursor: pointer;
	font-size: 13px;

	svg {
		font-size: 2.2rem;
	}

	.select-value {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		line-height: 3;
		padding-left: 15px;
	}

	.drop {
		width: ${(props) => props.styleWidth};
		height: auto;
		position: absolute;
		top: 100%;
		left: -1px;
		display: ${props => props.isOpen ? '' : 'none'};
		background-color: #fff;
		border-top: 1px solid lightgray;
		border-left: 1px solid lightgray;
		
		div {
			width: 100%;
			height: 30px;
			display: flex;
			align-items: center;
			border-right: 1px solid lightgray;
			border-bottom: 1px solid lightgray;
			padding: 1px 5px 1px 10px;
		}
	}
`