import React from 'react';
// import { Counter } from './features/counter/Counter';
import Task from './task/Task';
import styled from 'styled-components'

const Wrapper = styled.section`
background: papayawhip;
text-align: center;
min-width: 500px;
width: auto
  h1 {
    font-size: 14px;
    font-family: sans-serif;
  }
`;

function App() {

  return (
    <Wrapper>
      <h1>Task Management</h1>
      <Task />
    </Wrapper>
  );
}

export default App;
