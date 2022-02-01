import styled from 'styled-components';
import { HeaderComponent } from '@components/header/Component';
import { TopButton } from '@components/shared/TopButton';
import { Routes } from './routes';

import './App.css';

function App() {
  return (
    <div className='App'>
      <HeaderComponent/>
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