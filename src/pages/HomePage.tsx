import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Slider } from '@components/slider/MainSlider';
import { ProductSlider } from '@components/slider/ProductSlider';

interface HomePageProps {

}

export const HomePage = () => {

	return (
		<>
			<Slider/>
			<ProductSlider/>
		</>
	)
}

HomePage.prototype = {

}