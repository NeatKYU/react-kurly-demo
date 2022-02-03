import { useState } from 'react';
import styled from 'styled-components'
import Proptypes from 'prop-types';

interface ProductInfoNav {

}

export const ProductInfoNav = () => {

  const navList = [
    '상품설명', '상세정보', '후기', '문의'
  ]

  const [activeButton, setActiveButton] = useState(0);

  const handleActiveButton = (index: number) => {
    setActiveButton(index)
  }

  return (
    <Container>
      {
        navList && navList.map((item, idx) => (
          <div 
            className={`product-nav ${idx === activeButton ? 'active' : ''}`}
            onClick={() => handleActiveButton(idx)}
          >
            {item}
          </div>
        ))
      }

    </Container>
  )
}

ProductInfoNav.prototype = {

}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  position: sticky;
  top: 56px;
  z-index: 101;

  .product-nav {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid lightgray;

  }

  .active {
    background-color: white;
    color: lightcoral;
    border-bottom: 0px;
  }

  background-color: #f1f1f1;
  color: gray;
`