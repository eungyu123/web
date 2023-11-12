import React, { memo } from 'react';
import styled from 'styled-components';
import parse from "html-react-parser";


const Box = memo(({ title,contents }) => {
    return (
        <BoxS>
              <Title>{title}</Title>
              <Contents>{parse(contents)}</Contents>
        </BoxS>
    );
  });
  

export default Box;

const BoxS = styled.div`
  border: 1px solid #ccc; 
  padding: 30px 60px;
  width:750px;

`;

const Title = styled.h2`
  font-size: 24px; 
  margin-bottom: 10px; 
`;

const Contents = styled.div`
  font-size: 16px; 
`;
