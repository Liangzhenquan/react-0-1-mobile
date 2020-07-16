/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 10:14:52
 * @LastEditors: liang
 * @LastEditTime: 2020-07-16 13:19:12
 */
import React from 'react';
// import logo from "./logo.svg";
class A extends React.Component {
  state = {
    name: 123
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "tome",
  //     age: 12,
  //     obj: {
  //       name: 1,
  //     },
  //   };
  // }
  onHandle() {
    const a = 213;
  }
  render() {
    return <div>{this.state.obj?.name === 2}</div>;
  }
}
export default function App() {
  return <div>1234f41</div>;
}
