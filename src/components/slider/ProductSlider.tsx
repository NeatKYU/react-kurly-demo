import styled from 'styled-components';
import Proptypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import IconButton from '@mui/material/IconButton';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Product } from '@components/products/Product';

interface ProductSliderProps {

}


export const ProductSlider = () => {

	function NextArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<div 
				style={{ 
					...style, 
					display: 'flex', 
					justifyContent: 'center',
					position: 'absolute',
					right: '-15px',
					top: '32%'
				}}
				onClick={onClick}
			>
				<IconButton sx={{ 
					backgroundColor: 'white',
					boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
					'&:hover': {
						backgroundColor: 'white',
						boxShadow: 'rgba(0, 0, 0, 0.6) 0px 7px 15px',
				}}}>
					<IoIosArrowForward/>
				</IconButton>
			</div>
		);
	}
	
	function PrevArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<div 
				style={{ 
					...style, 
					display: 'flex', 
					justifyContent: 'center',
					position: 'absolute',
					left: '-15px',
					top: '32%',
					zIndex: '10'
				}}
				onClick={onClick}
			>
				<IconButton sx={{ 
					backgroundColor: 'white',
					boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
					'&:hover': {
						backgroundColor: 'white',
						boxShadow: 'rgba(0, 0, 0, 0.5) 0px 7px 15px',
				}}}>
					<IoIosArrowBack/>
				</IconButton>
			</div>
		);
	}

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow/>,
		prevArrow: <PrevArrow/>,
	}

	return (
		<Container>
			<div className='slider-title'>
				이 상품 어때요?
			</div>
			<Slider {...settings}>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
			</Slider>
		</Container>
	)
}


ProductSlider.prototype = {

}

const Container = styled.div`
	width: 1050px;
	margin: 0 auto;

	.slider-title {
		width: 100%;
		margin-top: 4rem;
		margin-bottom: 2rem;
		text-align: center;
		font-size: 2rem;
		font-weight: bold;
	}
`