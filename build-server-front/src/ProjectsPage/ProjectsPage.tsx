import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from "antd";
import { Layout, Menu, Collapse, Select, Skeleton, Empty, Drawer } from "antd";
import {
  SettingOutlined,
  ToolOutlined,
  CodeOutlined,
  FileOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
  ProjectOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "./ProjectsPage.css";
import { ExpandIconPosition } from "antd/lib/collapse/Collapse";
import HttpClient from "../api/HttpClient";
import CreateProjectForm from "./CreateProjectForm/CreateProjectForm";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;
const { Option } = Select;

const getProjects = async () => {
  const projects = await HttpClient.getAsync("projects");
  return projects;
};

const deleteProject = async (id: any) => {
  await HttpClient.deleteAsync(`projects/${id}/`);
};

function callback(key: any) {
  console.log(key);
}

const createProject = async (project: any, projects: any) => {
  const createdProject = await HttpClient.postAsync("projects", project);
  projects.push(createdProject);
};

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [creatingProject, setCreatingProject] = useState(false);
  const [createProjectFormData, setCreateProjectFormData] = useState({});
  useEffect(() => {
    (async () => {
      const projects = await getProjects();
      console.log(projects);
      setProjects(projects);
      setIsLoading(false);
    })();
  }, []);

  const genExtra = (project: any) => (
    <>
      <SettingOutlined
        onClick={(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
      <DeleteOutlined onClick={() => deleteProject(project.Id)} />
    </>
  );

  const onCreateProjectClick = () => setCreatingProject(true);
  const onCreatingProjectClose = () => setCreatingProject(false);
  const onFormSubmit = async () => {
    console.log('Create Project')
    console.log(createProjectFormData);
    await createProject(createProjectFormData, projects);
    setProjects(projects);
    onCreatingProjectClose();
  };

  return (
    <>
      {isLoading ? (
        <>
          {[1, 2, 3, 4, 5].map((val) => (
            <Skeleton active key={val} />
          ))}
        </>
      ) : (
        <div className="projects-box">
          <Layout>
            <Header className="menu-header">
              <Menu mode="horizontal" selectable={false}>
                <Menu.Item>
                  <Button onClick={onCreateProjectClick}>Create</Button>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              {!projects || projects.length == 0 ? (
                <Empty className="empty-content" />
              ) : (
                <Collapse onChange={callback} expandIconPosition="left">
                  {projects.map((p: any) => (
                    <Panel header={p.Name} key={p.Id} extra={genExtra(p)}>
                      <div>text</div>
                    </Panel>
                  ))}
                </Collapse>
              )}
              <Drawer
                title="Create a new project"
                width={720}
                onClose={onCreatingProjectClose}
                visible={creatingProject}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <Button
                      onClick={onCreatingProjectClose}
                      style={{ marginRight: 8 }}
                    >
                      Cancel
                    </Button>
                    <Button onClick={onFormSubmit} type="primary">
                      Submit
                    </Button>
                  </div>
                }
              >
                <CreateProjectForm
                  formData={createProjectFormData}
                  setFormData={setCreateProjectFormData}
                />
              </Drawer>
            </Content>
          </Layout>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
