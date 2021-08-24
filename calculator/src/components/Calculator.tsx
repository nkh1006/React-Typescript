import React from 'react';
import Button from './Buttons';
import styled from 'styled-components';

const Container = styled.div`
  background: #323232;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(5, 80px);
`;

const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      <Grid>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </Grid>
    </Container>
  );
};

export default Calculator;