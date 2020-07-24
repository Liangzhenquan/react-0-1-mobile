import React from 'react';
import { Result, Button } from 'antd';
function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面找不到"
      extra={<Button type="primary">返回</Button>}
    />
  );
}
export default NotFound;
