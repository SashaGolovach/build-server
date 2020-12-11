import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography } from 'antd';
import './HomePage.less'
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

const HomePage = () => {
  //localStorage.removeItem('accessToken');
  const [selectedItem, setSelectedItem] = useState('mail');

  const handleClick = (e : any) => {
    console.log('click ', e);
    setSelectedItem(e.key);
  };

  return <>
      <Menu onClick={handleClick} selectedKeys={[selectedItem]} mode="horizontal">
        <Menu.Item key="mail" icon={<ProjectOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<ToolOutlined />} title="Tools">
          <Menu.ItemGroup title="Common">
            <Menu.Item key="setting:1" icon={<CodeOutlined />}>Shell</Menu.Item>
            <Menu.Item key="setting:2" icon={<FileOutlined />}>Files</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Server">
            <Menu.Item key="setting:3" icon={<BarChartOutlined />}>Metrics</Menu.Item>
            <Menu.Item key="setting:4" icon={<InfoCircleOutlined />}>Logs</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <p>Projects</p>
    </>
};

export default HomePage;