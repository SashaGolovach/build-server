import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  SettingOutlined,
  ToolOutlined,
  CodeOutlined,
  FileOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
  ProjectOutlined
} from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ToolsPage = () => {
  //localStorage.removeItem('accessToken');
  const [selectedItem, setSelectedItem] = useState('mail');

  return <>
      <p>Tools</p>
    </>
};

export default ToolsPage;