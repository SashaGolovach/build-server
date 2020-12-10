import React from 'react';
import 'antd/dist/antd.css';
import './LoginPage.less'
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values : any) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-page">
        <Title>Build Server</Title>
        <Form className="login-form" name="basic" onFinish={onFinish} >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    message: 'Please input your username!'
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    message: 'Please input your password!'
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                Login
                </Button>
            </Form.Item>
        </Form>
    </div>
  );
};

export default LoginPage;