import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;
const SplitScreen = ({ left: Left, right: Right }) => {
  // props for the left and right hand will be passed in the App.jsx
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen;
