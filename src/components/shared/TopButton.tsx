import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';

interface TopButtonProps {

}

export const TopButton = () => {

  return (
    <Container>
      <AiOutlineArrowUp/>
    </Container>
  )
}

TopButton.prototype = {

}

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

`