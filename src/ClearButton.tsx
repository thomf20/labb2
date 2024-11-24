import React from 'react';
import styled from 'styled-components';

interface ClearButtonProps {
  onClear: () => void;
}

const StyledClearButton = styled.button`
  padding: 10px 15px;
  margin: 5px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
  return <StyledClearButton onClick={onClear}>Clear</StyledClearButton>;
};

export default ClearButton;
