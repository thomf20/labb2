import React, { useState } from 'react';

interface ChuckNorrisButtonProps {
  apiKey: string; 
}

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
      <button onClick={fetchJoke}>Chuck Norris Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default ChuckNorrisButton;
