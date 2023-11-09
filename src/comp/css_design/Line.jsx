import React, { memo } from 'react';
import styled from 'styled-components';
import parse from "html-react-parser";

export const Line = memo(({ title,contents }) => {
  return (
    <Container>
      <LineList>
          <LineItemContainer >
            <LineItem>
              <Title>{title}</Title>
              <Contents>{parse(contents)}</Contents>
            </LineItem>
          </LineItemContainer>
      </LineList>
    </Container>
  );
});

const Container = styled.div`
  max-width: 500px;
  padding: 40px;
  box-sizing: border-box;
`;

const LineList = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 2px solid rgb(65, 108, 167);
  list-style: none;
`;

const LineItemContainer = styled.li`
  list-style: none;
`;

const Title = styled.span`
  padding: 4px 12px;
  background: rgb(79, 62, 180);
  color: white;
  border-radius: 16px;
  `;

const Contents = styled.div`
  color: black;
`;

const LineItem = styled.div`
  position: relative;
  margin: 20px;

  &:hover {
    // background: rgba(105, 105, 105, 0.2);
    ${Title} {
      background: seagreen;
      color: white;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -27px;
    width: 12px;
    height: 12px;
    background: blue;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  }
`;

export default Line;