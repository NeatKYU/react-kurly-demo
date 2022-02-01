import styled from 'styled-components';
import PropTypes from 'prop-types';

interface CustomButtonGroupProps {
  children: any;
}

export const CustomButtonGroup = (props: CustomButtonGroupProps) => {

  const { children } = props;
  
  return (
    <Container>
      {children}
    </Container>
  )
}

CustomButtonGroup.prototype = {
  children: PropTypes.any
}

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-right: 10px;
  }

`