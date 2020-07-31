import React, { useState, useRef } from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import { getCampList } from '@/api';
const { TabPane } = Tabs;
const panes = [
  { name: '全部', key: '1' },
  { name: '未发布', key: '2' },
  { name: '已终止', key: '3' },
  { name: '已截止', key: '4' }
];
function Index() {
  const { data } = getCampList();
  const containerRef = useRef();
  return (
    <Tabs type="card">
      {panes.map((pane) => (
        <TabPane key={pane.key} tab={pane.name}>
          <div ref={containerRef}></div>
        </TabPane>
      ))}
    </Tabs>
  );
}
const Card = styled.div``;
export default Index;
