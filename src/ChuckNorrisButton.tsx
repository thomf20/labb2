import React, { useState } from 'react';
import styled from 'styled-components';

interface ChuckNorrisButtonProps {
  apiKey: string;
}

const StyledButton = styled.button`
  background-color: #f44336; 
  color: white; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #d32f2f; /* Mörkare röd när du hovrar */
  }
`;

const ChuckNorrisButton: React.FC<ChuckNorrisButtonProps> = ({ apiKey }) => {
  const [joke, setJoke] = useState<string | null>(null);

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
      <StyledButton onClick={fetchJoke}>Chuck Norris Joke</StyledButton>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default ChuckNorrisButton;
