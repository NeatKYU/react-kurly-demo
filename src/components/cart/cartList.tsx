import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@recoils/User';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { CartItem } from '@components/cart/CartItem';
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

// swr
import { Fetcher } from '@utils/fetcher';
import useSWR from 'swr';


interface CartListProps {
	
}

export const CartList = () => {

	const [isAllChecked, setIsAllChecked] = useState(true);
	const userInfo = useRecoilValue(userAtom);

	const { data, error } = useSWR(`/api/cart/${userInfo.user_id}`, Fetcher)

	return (
		<Container>
			<div className='list-header flex-vertical-center'>
				{isAllChecked ? <RiCheckboxCircleFill/> : <RiCheckboxCircleLine/>}
				<div className='all-text'>전체선택(1/{data && data.count})</div>
				<div className='all-text'>선택삭제</div>
			</div>
			<div className='list-body'>
				{data && data.list.map((item: any) => (
					<CartItem 
						key={item.product_sid} 
						productName={item.product_name} 
						productPrice={item.price}
					/>
				))}
			</div>
			<div className='list-header flex-vertical-center' style={{borderBottom: 'none'}}>
				{isAllChecked ? <RiCheckboxCircleFill/> : <RiCheckboxCircleLine/>}
				<div className='all-text'>전체선택(1/{data && data.count})</div>
				<div className='all-text'>선택삭제</div>
			</div>
		</Container>
	)
}

CartList.prototype = {

}

const Container = styled.div`
	width: 100%;

	.list-header {
		width: 100%;
		height: 60px;
		border-bottom: 1px solid black;

		.all-text {
			margin-left: 20px;
		}
		
		svg {
			font-size: 2rem;
		}
	}

`