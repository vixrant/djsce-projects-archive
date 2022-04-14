import React from 'react';

import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: black;
  padding: 2rem;
  margin: 4px;
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  font-family: monospace;
  display: flex;
  flex-direction: column;
`;

type TokenProps = {
  number: number,
  name?: string,
};

const Token: React.FC<TokenProps> = ({ number, name }) => {
  return (
    <CardContainer>
      {number}
    </CardContainer>
  );
}

export default Token;
