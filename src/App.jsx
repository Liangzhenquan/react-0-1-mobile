/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 10:14:52
 * @LastEditors: liang
 * @LastEditTime: 2020-07-20 15:48:49
 */
import React, { useState } from 'react';
import { Button } from 'antd';
export default function App() {
  const [count] = useState(0);
  return (
    <div>
      {count}
      <Button>antd button</Button>
    </div>
  );
}
