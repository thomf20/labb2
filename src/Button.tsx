import React, { useCallback } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]); 

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
