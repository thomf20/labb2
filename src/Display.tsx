import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display">
      <h2>{value}</h2>
    </div>
  );
};

export default Display;
