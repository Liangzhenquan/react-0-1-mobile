import React from 'react';
import styled from 'styled-components';
function Loading({ loading, children }) {
  if (loading) {
    return <Container className="123"></Container>;
  }
  return children;
}
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Loading;
