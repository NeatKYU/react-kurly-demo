import styled from 'styled-components';
import Proptypes from 'prop-types';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cat from '@asset/images/cat.jpg';
import Sun from '@asset/images/sun.jpg';
import Town from '@asset/images/town.jpg'


interface SliderProps {

}

export const Slider = () => {

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Container>
			<SlickSlider {...settings}>
				<div className='element'>
					<img src={Cat} alt='cat'/>
				</div>
				<div className='element'>
					<img src={Sun} alt='sun'/>
				</div>
				<div className='element'>
					<img src={Town} alt='town'/>
				</div>
			</SlickSlider>
		</Container>
	)
}

Slider.prototype = {

}

const Container = styled.div`
	width: 100%;
	overflow: hidden;
	
	.element {
		width: 100%;
		height: 370px;
		display: flex !important;
		justify-content: center;
		object-fit: cover;
		box-sizing: border-box;
		
		img {
			width: 100%;
		}
	}
`