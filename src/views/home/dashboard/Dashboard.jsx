import React from 'react';
import styled from 'styled-components';
import { Row, Col, Statistic } from 'antd';
import Loading from '@/components/Loading';
import { getInfo } from '@/api';
import { Title } from '@/style';
function Dashboard() {
  const { loading } = getInfo();
  return (
    <Loading loading={loading}>
      <DataTitle primary color="red" weight="bold" size="20px">
        数据概况
      </DataTitle>
      <Row gutter="10">
        <Col span="6">
          <Card left="#6fa0e1" right="#4b70db">
            <div>总访问人数</div>
            <Statistic value="10000" />
          </Card>
        </Col>
        <Col span="6">
          <Card left="#feb485" right="#fca28a">
            <div>总访问人数</div>
            <Statistic value="10000" />
          </Card>
        </Col>
        <Col span="6">
          <Card left="#b879f4" right="#9f58eb">
            <div>总访问人数</div>
            <Statistic value="10000" />
          </Card>
        </Col>
        <Col span="6">
          <Card left="#8bf5aa" right="#5af09a">
            <div>总访问人数</div>
            <Statistic value="10000" />
          </Card>
        </Col>
      </Row>
    </Loading>
  );
}
const CardTitle = styled.div`
  color: #fff;
  font-size: 16px;
`;
const DataTitle = styled(Title)`
  border-left: 2px solid ${(props) => props.theme['primary-color']};
  padding-left: 10px;
  margin-bottom: 10px;
`;
const Card = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.left},
    ${(props) => props.right}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2px;
  padding-left: 20px;
  height: 130px;
  position: relative;
  overflow: hidden;
  > div {
    font-size: 16px;
  }
  > div,
  .ant-statistic-content {
    color: #fff;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -20px;
    right: -40px;
    background: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0.2;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: -20px;
    background: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0.2;
  }
`;
const Circle = styled.div``;
export default Dashboard;
