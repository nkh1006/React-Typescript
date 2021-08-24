import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  /* width 100vw; */
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
