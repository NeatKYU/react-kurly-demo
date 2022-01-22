import styled from 'styled-components';
import { HeaderComponent } from '@components/header/Component';
import { Routes } from './routes';

function App() {
  return (
    <>
      <HeaderComponent/>
      <Routes/>
      <Body/>
    </>
  );
}

export default App;


const Body = styled.div`
  width: 100%;
  height: 200vh;
`