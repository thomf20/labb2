import React from 'react';

interface ClearButtonProps {
  onClear: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
  return <button onClick={onClear}>Clear</button>;
};

export default ClearButton;
