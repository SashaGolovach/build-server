import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './HomePage.less'
import { Menu } from 'antd';
import {
  SettingOutlined,
  ToolOutlined,
  CodeOutlined,
  FileOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
  ProjectOutlined
} from '@ant-design/icons';

import ProjectsPage from '../ProjectsPage/ProjectsPage'
import ToolsPage from '../ToolsPage/ToolsPage'
import SettingsPage from '../SettingsPage/SettingsPage'
const { SubMenu } = Menu;

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState('projects');

  const handleClick = (e : any) => {
    setSelectedItem(e.key);
  };

  const getContentComponent = () => {
    switch(true){
      case selectedItem == 'projects':
        return <ProjectsPage />
      case selectedItem.startsWith('tools'):
        return <ToolsPage />
      case selectedItem == 'settings':
        return <SettingsPage />
    }
  }

  return <>
      <Menu onClick={handleClick} selectedKeys={[selectedItem]} mode="horizontal">
        <Menu.Item key="projects" icon={<ProjectOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="settings" disabled icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<ToolOutlined />} title="Tools">
          <Menu.ItemGroup title="Common">
            <Menu.Item key="tools:ssh" icon={<CodeOutlined />}>Shell</Menu.Item>
            <Menu.Item key="tools:files" icon={<FileOutlined />}>Files</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Server">
            <Menu.Item key="tools:metrics" icon={<BarChartOutlined />}>Metrics</Menu.Item>
            <Menu.Item key="tools:logs" icon={<InfoCircleOutlined />}>Logs</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      { getContentComponent() }
    </>
};

export default HomePage;