/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 10:14:52
 * @LastEditors: liang
 * @LastEditTime: 2020-07-22 18:23:44
 */
import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { login } from './api';
import './app.css';
message.config({
  duration: 2,
  maxCount: 2
});
export default function App() {
  const [count] = useState(0);
  const { data, run } = login();
  useEffect(() => {
    run({
      username: 'admin',
      password: '123456'
    });
  }, []);

  return (
    <div>
      {count}
      <div className="app">{data.name}</div>
      <Button>antd button</Button>
    </div>
  );
}
