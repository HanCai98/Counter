import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from "styled-components";

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  position: 'relative';
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  height: 50px;
  width: 150px;
  &:hover {
    background-color: #283593;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;


function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Counter</h1>
      <p style={{textAlign: 'center', fontWeight: 'bold'}}>Hint: click the button below, the number will increase</p>

      <br></br>

      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Button onClick={() => setCount(count + 1)}>Click</Button>
      </div>
      <h2 style={{textAlign: 'center'}}>Current Number: {count}</h2>

    </div>
  );
}

export default App;
