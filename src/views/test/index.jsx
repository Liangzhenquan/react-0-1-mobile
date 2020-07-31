import React from 'react';
import styled from 'styled-components';
import './app.css';
import './app.less';
import { Button } from 'antd-mobile';
function Test() {
  return (
    <Content>
      <div className="test">test</div>
      <div className="test">test less</div>
      <Link>title</Link>
      <Button type="primary">Button</Button>
    </Content>
  );
}
const Content = styled.div`
  padding: 0 0.4rem;
`;
const Link = styled.div`
  background: #409eff;
  margin: 10px auto;
  font-size: 20px;
  display: flex;
  flex: 1;
  box-sizing: border-box;
`;

export default Test;
