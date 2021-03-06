import styled from 'styled-components'
import Proptypes from 'prop-types'
import { ProductInfoNav } from '@components/products/ProductInfoNav';
import { ProductNotice } from '@components/products/ProductNotice';

interface ProductInfoProps {

}

export const ProductInfo = () => {

  return (
    <Container>
      <ProductInfoNav/>
      <ProductNotice/>
    </Container>
  )
}

ProductInfo.prototype = {

}


const Container = styled.div`
  width: 1000px;
  height: auto;
  min-height: 1000px;
`
