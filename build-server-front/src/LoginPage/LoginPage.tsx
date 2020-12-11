import React from 'react';
import 'antd/dist/antd.css';
import './LoginPage.less'
import { Form, Input, Button, Typography } from 'antd';
import HttpClient from '../api/HttpClient';
import { RouteComponentProps } from "react-router-dom";


const { Title } = Typography;

interface IProps extends RouteComponentProps{

}

const LoginPage = (props : IProps) => {
  const loggedIn = localStorage.getItem('accessToken') != undefined;
  if(loggedIn){
    props.history.push('/');
  }
  const onFinish = async (values : any) => {
    console.log('Data:', values);
    const payload = {
        Username : values.username,
        Password : values.password
    }
    const tokenResponse = await HttpClient.postAsync('auth/token', payload);
    localStorage.setItem('accessToken', tokenResponse.Token);
    props.history.push('/');
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