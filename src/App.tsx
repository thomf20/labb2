import React from 'react';
import Calculator from './Calculator';
import ChuckNorrisButton from './ChuckNorrisButton';

const apiKey = import.meta.env.VITE_API_KEY;

const App: React.FC = () => {
  return (
    <div>
      <h1>Kalkylator</h1>
      <Calculator />
      {apiKey && <ChuckNorrisButton apiKey={apiKey} />}
    </div>
  );
};

export default App;
