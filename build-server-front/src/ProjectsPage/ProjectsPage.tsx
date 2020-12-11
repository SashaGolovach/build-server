import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography } from 'antd';
import { Layout, Menu, Collapse } from 'antd';
import {
  SettingOutlined,
  ToolOutlined,
  CodeOutlined,
  FileOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
  ProjectOutlined
} from '@ant-design/icons';

import './ProjectsPage.css'

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

const ProjectsPage = () => {
  //localStorage.removeItem('accessToken');
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function callback(key:any) {
    console.log(key);
  }
  return <>
      <Collapse className="projects" onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <Collapse defaultActiveKey="1">
        <Panel header="This is panel nest panel" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
</>
};

export default ProjectsPage;