import React from 'react';
import styled from 'styled-components';

interface DisplayProps {
  value: string;
}

const StyledDisplay = styled.div`
  background-color: #e9ecef;
  padding: 15px;
  font-size: 1.5em;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 20px;
`;

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <StyledDisplay>{value}</StyledDisplay>;
};

export default Display;
