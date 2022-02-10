import styled from 'styled-components';
import { HeaderComponent } from '@components/header/Component';
import { TopButton } from '@components/shared/TopButton';
import { Routes } from './routes';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Container className='flex-vertical-center'>
        <HeaderComponent/>
      </Container>
      <Routes/>
      <Body/>
      <TopButton/>
    </div>
  );
}

export default App;


const Body = styled.div`
  width: 100%;
  height: 200vh;
`

const Container = styled.div`
  width: 100%;
  position: sticky;
	top: -6.3rem;
  z-index: 100;
  background-color: #fff;
`