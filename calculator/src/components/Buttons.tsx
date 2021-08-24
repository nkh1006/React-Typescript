import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button: React.FC = () => {
    return (
      <StyledButton>1</StyledButton>
    );
};

export default Button;