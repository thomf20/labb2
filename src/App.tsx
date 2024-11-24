import React, { useState } from 'react';
import styled from 'styled-components';
import ChuckNorrisButton from './ChuckNorrisButton';
import Display from './Display';
import Button from './Button';
import ClearButton from './ClearButton';

const apiKey = import.meta.env.VITE_API_KEY;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
  margin-top: 20px;
`;

const ChuckButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const App: React.FC = () => {
  const [calcValue, setCalcValue] = useState<string>(''); 
  const [joke, setJoke] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setCalcValue(prevValue => prevValue + value);
  };

  const clearDisplay = () => {
    setCalcValue('');
    setJoke(null);
  };

  const calculate = () => {
    try {
      setCalcValue(eval(calcValue).toString());
    } catch (error) {
      setCalcValue('Error');
    }
  };

  return (
    <Wrapper>
      <h1>Calculator + Chuck Norris Jokes</h1>
      <Display value={calcValue || (joke || 'Do some math or get a chuck norris joke')} />
      
      <CalculatorGrid>
        <Button label="1" onClick={() => handleButtonClick('1')} />
        <Button label="2" onClick={() => handleButtonClick('2')} />
        <Button label="3" onClick={() => handleButtonClick('3')} />
        <Button label="4" onClick={() => handleButtonClick('4')} />
        <Button label="5" onClick={() => handleButtonClick('5')} />
        <Button label="6" onClick={() => handleButtonClick('6')} />
        <Button label="7" onClick={() => handleButtonClick('7')} />
        <Button label="8" onClick={() => handleButtonClick('8')} />
        <Button label="9" onClick={() => handleButtonClick('9')} />
        <Button label="0" onClick={() => handleButtonClick('0')} />
      </CalculatorGrid>

      <CalculatorGrid>
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="*" onClick={() => handleButtonClick('*')} />
        <Button label="/" onClick={() => handleButtonClick('/')} />
        <Button label="=" onClick={calculate} />
        <ClearButton onClear={clearDisplay} />
      </CalculatorGrid>

      <ChuckButtonWrapper>
        <ChuckNorrisButton apiKey={apiKey} />
        {joke && <p>{joke}</p>}
      </ChuckButtonWrapper>
    </Wrapper>
  );
};

export default App;
