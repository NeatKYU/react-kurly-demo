import { HeaderComponent } from '@components/header/Component';
import { Slider } from '@components/slider/MainSlider';
import styled from 'styled-components';
import { ProductSlider } from '@components/slider/ProductSlider';

function App() {
  return (
    <>
      <HeaderComponent/>
      <Slider/>
      <ProductSlider/>
      <Body/>
    </>
  );
}

export default App;


const Body = styled.div`
  width: 100%;
  height: 200vh;
`