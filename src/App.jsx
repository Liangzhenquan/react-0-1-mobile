/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 10:14:52
 * @LastEditors: liang
 * @LastEditTime: 2020-07-19 20:16:45
 */
import React, { useState } from 'react';
import './app.css';
import './app.less';
export default function App() {
  const [count] = useState(0);

  return <div className="app">{count}</div>;
}
