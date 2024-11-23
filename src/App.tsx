// App.tsx
import React, { useState } from 'react';
import ChuckNorrisButton from './ChuckNorrisButton';
import Display from './Display';
import Button from './Button';
import ClearButton from './ClearButton';

const apiKey = import.meta.env.VITE_API_KEY;

const App: React.FC = () => {
  const [calcValue, setCalcValue] = useState<string>(''); 
  const [joke, setJoke] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setCalcValue(prevValue => prevValue + value);
  };

  const clearDisplay = () => {
    setCalcValue('');
    setJoke(null); // Rensa skämtet när kalkylatorn rensas
  };

  const calculate = () => {
    try {
      setCalcValue(eval(calcValue).toString());
    } catch (error) {
      setCalcValue('Error');
    }
  };

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/chucknorris', {
        headers: { 'X-Api-Key': apiKey },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Kunde inte hämta skämtet:', error);
    }
  };

  return (
    <div>
      <h1>Kalkylator</h1>
      <Display value={calcValue || (joke || 'Välj en funktion')} />
      
      <div className="calculator-buttons">
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
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="*" onClick={() => handleButtonClick('*')} />
        <Button label="/" onClick={() => handleButtonClick('/')} />
        <Button label="=" onClick={calculate} />
        <ClearButton onClear={clearDisplay} />
      </div>
      
      <button onClick={fetchJoke}>Get Chuck Norris Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default App;
