import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const HomePage = () => {
  const onFinish = (values : any) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-page">
        Welcome home!
    </div>
  );
};

export default HomePage;