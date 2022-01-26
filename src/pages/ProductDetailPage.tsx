import styled from 'styled-components';
import Proptypes from 'prop-types';
import { ProductInfoCard } from '@components/products/ProductInfoCard';

interface ProductDetailPageProps {

}

export const ProductDetailPage = () => {

return (
	 <Container>
	 	<ProductInfoCard/>
	 </Container>
 )
}

ProductDetailPage.prototype = {

}

const Container = styled.div`
	width: 1000px;
	padding-top: 1rem;
	margin: 0 auto;
`