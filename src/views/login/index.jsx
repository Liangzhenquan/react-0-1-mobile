import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Checkbox, Form } from 'antd';
import { login } from '@/api';
import { icons } from '@/utils/variable';
import Icon from '@/components/Icon';
function Login() {
  const { appName } = process.env;
  const { run, loading } = login();
  const [autoLogin, setAutoLogin] = useState(true);
  const onFinish = (value) => {
    run(value);
  };
  return (
    <Contain>
      <LoginForm>
        <Title>{appName}</Title>
        <InputForm onFinish={onFinish}>
          <Form.Item>
            <Tabs defaultActiveKey="1">账号密码登录</Tabs>
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              prefix={<Icon name={icons.user} />}
              placeholder="请输入用户名"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<Icon name={icons.password} />}
              placeholder="请输入密码"
              size="large"
            />
          </Form.Item>
          <TextBtns>
            <Checkbox
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
            >
              自动登录
            </Checkbox>
          </TextBtns>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
              {loading ? '登录中...' : '登录'}
            </Button>
          </Form.Item>
        </InputForm>
      </LoginForm>
    </Contain>
  );
}
const Contain = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['bg-color']};
`;
const LoginForm = styled.div`
  width: 500px;
  min-height: 300px;
`;
const Title = styled.p`
  font-size: 31px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
const Tabs = styled.p`
  width: 300px;
  margin: 0 auto;
  font-size: 18px;
  color: ${(props) => props.theme['primary-color']};
  border-bottom: 2px solid ${(props) => props.theme['primary-color']};
  text-align: center;
`;
const TextBtns = styled.div`
  margin-bottom: 24px;
  text-align: right;
  span:last-child {
    color: ${(props) => props.theme['primary-color']};
  }
`;
const InputForm = styled(Form)`
  width: 350px;
  margin: 0 auto;
  .ant-btn {
    width: 100%;
  }
`;
export default Login;
