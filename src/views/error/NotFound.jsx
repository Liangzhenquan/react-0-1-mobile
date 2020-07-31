import React from 'react';
import { Result } from 'antd-mobile';
function NotFound() {
  return (
    <Result
      title="无法完成操作"
      message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
    />
  );
}
export default NotFound;
