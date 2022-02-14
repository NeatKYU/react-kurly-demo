import { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faCarrot, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

interface CartegoryModalProps {

}

export const CartegoryModal = (props: CartegoryModalProps) => {

	const subList1 = [
		'sub채소1','sub채소2','sub채소3','sub채소4',
	]
	const subList2 = [
		'sub과일1','sub과일2','sub과일3','sub과일4'
	]
	const subList3 = [
		'sub수산1','sub수산2','sub수산3','sub수산4'
	]

	const [currentList, setCurrentList] = useState<string[]>([]);

	const handleSubCartegory = (cartegory: number) => {
		if(cartegory === 1) {
			setCurrentList(subList1);
		} else if(cartegory === 2) {
			setCurrentList(subList2);
		} else if(cartegory === 3) {
			setCurrentList(subList3);
		}
	}

	return (
		<Container>
			<div className='main' >
				<div className='contents' onMouseOver={() => handleSubCartegory(2)}>
					<FontAwesomeIcon icon={faAppleAlt}/>
					<div>과일∙견과∙쌀</div>
				</div>
				<div className='contents' onMouseOver={() => handleSubCartegory(3)}>
					<FontAwesomeIcon icon={faFish}/>
					<div>수산∙해산∙건어물</div>
				</div>
				<div className='contents' onMouseOver={() => handleSubCartegory(1)}>
					<FontAwesomeIcon icon={faCarrot}/>
					<div>채소</div>
				</div>
				<div className='sub'>
					{currentList && currentList.map((item, idx) => (
						<div key={idx} className='contents'>
							<div>{item}</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

CartegoryModal.prototype = {

}

const Container = styled.div`
	position: absolute;
	top: 56px;
	left: 0;

	width: 12rem;

	.main {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		display: none;
		background-color: #fff;
		border: 1px solid #afafaf;

		position: relative;

		.sub {
			width: 100%;
			height: auto;
			position: absolute;
			top: -1px;
			left: 12rem;
			display: none;

			background-color: #ece6ee;

		}

		&:hover {
			.sub {
				display: flex;
				flex-direction: column;
			}
		}

		.contents {
			width: 100%;
			height: 2rem;
			display: flex;
			align-items: center;
			padding: 10px;
			box-sizing: border-box;
			font-size: 13px;

			svg {
				margin-right: 10px;
				font-size: 1rem;
			}

			&:hover {
				cursor: pointer;
				background-color: #e6dbf336;
				color: #5f0081;
			}
		}
	}
`