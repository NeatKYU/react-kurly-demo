import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Notice } from '@components/products/notice/Notice';

interface ProductNoticeProps {

}

export const ProductNotice = () => {

	const bodyList = [
		{
			title: '01. 상품에 문제가 있는 경우',
			body: [
				<p>받으시는 상품이 어쩌구 저쩌구</p>,
				<p>두번째 줄입니다.</p>,
				<p>세번째 줄입니다.</p>,
			]
		},{
			title: '02. 단순 변심, 주문 착오의 경우',
			body: [
				<p>받으시는 상품이 어쩌구 저쩌구</p>,
				<p>두번째 줄입니다.</p>,
				<p>세번째 줄입니다.</p>,
			]
		},{
			title: '03. 교환 및 반품이 불가한 경우',
			body: [
				<p>받으시는 상품이 어쩌구 저쩌구</p>,
				<p>두번째 줄입니다.</p>,
				<p>세번째 줄입니다.</p>,
			]
		},
	]

	const bodyList2 = [
		{
			title: '주문 취소 관련',
			body: [
				<p>받으시는 상품이 어쩌구 저쩌구</p>,
				<p>두번째 줄입니다.</p>,
				<p>세번째 줄입니다.</p>,
			]
		},{
			title: '결제 승인 취소 / 환불 관련',
			body: [
				<p>받으시는 상품이 어쩌구 저쩌구</p>,
				<p>두번째 줄입니다.</p>,
				<p>세번째 줄입니다.</p>,
			]
		},
	]

	return (
		<Container>
			<div className='notice-title'>
				<div className='title flex-vertical-center'>고객행복센터</div>
				<strong className='sub-title'>궁금하거나 서비스 이용에 불편한 점 없으신가요?</strong>
				<div className='sub-title'>문제가 되는 부분을 사진을 찍어 올려주시면 빠르게 해결해드리겠습니다.</div>
				<div className='box'/>
				<div className='notice-way'>
					<div className='way-card'>
						<div className='title'>| 전화 문의 1544-0000</div>
						<div className='sub-title'>오전 7시 ~ 오후 7시 (연중무휴)</div>
					</div>
					<div className='way-card'>
						<div className='title'>| 카카오톡 문의</div>
						<div className='sub-title'>오전 7시 ~ 오후 7시 (연중무휴)</div>
						<div className='description'>
							<span>카카오톡에서 '마켓컬리'를 검색 후 대화창에 문의 및 불편사항을 남겨주세요.</span>
						</div>
					</div>
					<div className='way-card'>
						<div className='title'>| 홈페이지 문의</div>
						<div className='sub-title'>24시간 접수 가능</div>
						<div className='sub-title'>로그인 &gt; 마이컬리 &gt; 1:1문의</div>
						<div className='description'>
							<span>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</span>	
						</div>
					</div>
				</div>
			</div>
			<Notice 
				titleTitle='교환 및 반품 안내' 
				titleBody='교환 및 환불이 필요하신분은 전화주세요.'
				bodyList={bodyList}
				closeButton
			/>
			<Notice 
				titleTitle='주문 취소 안내' 
				titleBody='[배송준비중] 이전까지 취소 가능합니다.'
				bodyList={bodyList2}
				closeButton
			/>
			<Notice 
				titleTitle='배송 관련 안내' 
				titleBody='배송 과정 중 기상 악화 및 도로교통 상황에 따라 부득이하게 지연 배송이 발생될 수 있습니다.'
			/>
		</Container>
	)
}

ProductNotice.prototype = {

}

const Container = styled.div`
	width: 100%;
	height: 1000px;

	.notice-title {
		width: 100%;
		height: 400px;
		color: #a5a5a5;
		
		.title {
			width: 100%;
			height: 70px;
			font-size: 1.8rem;
			font-weight: bold;
		}

		.sub-title {
			width: 100%;
			font-size: 1.1rem;
		}

		.notice-way {
			width: 100%;
			height: auto;
			display: flex;

			.way-card {
				width: 33.33%;
				padding-right: 8rem;

				.title {
					height: 30px;
					font-size: 1.2rem;
					color: #a058f1;
				}

				.sub-title {
					width: 100%;
					font-size: 1rem;
				}

				.description {
					width: 100%;
					padding-top: 1rem;
					font-size: 14px;

				}

			}
		}
	}
`