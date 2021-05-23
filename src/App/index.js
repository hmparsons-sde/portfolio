import React from 'react';
import styled from 'styled-components';

const Button1 = styled.button`
  color: white;
  background-color: darkgreen;
`;

const Button2 = styled.button`
  color: white;
  background-color: darkred;
`;

const ButtonDiv = styled.div`
  color: white;
  background-color: ${(props) => props.bgColor || 'black'};
  margin: 10px;
  padding: 20px;
`;

function App() {
  const handleClick = (e) => {
    console.warn(e.target.outerText);
  };

  return (
    <div className='App'>
      {/* Styled component without prop  */}
      <ButtonDiv>
        <Button1 onClick={handleClick}>I am button 1</Button1>
      </ButtonDiv>

      <button onClick={handleClick}>I am button 1 no style</button>

      {/* Styled component with prop  */}
      <ButtonDiv bgColor='purple'>
        <Button2 onClick={handleClick}>I am button 2</Button2>
      </ButtonDiv>
    </div>
  );
}

export default App;
