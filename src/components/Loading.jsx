import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
function Loading() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Loading;
