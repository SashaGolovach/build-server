import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Layout, Menu, Skeleton} from "antd";
import HttpClient from "../api/HttpClient";
import ProjectsListPage from "./ProjectsListPage/ProjectsListPage";
import CreateProjectPage from "./CreateProjectPage/CreateProjectPage";
import "antd/dist/antd.css";
import "./ProjectsPage.css";

const { Header, Content} = Layout;

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [creatingProject, setCreatingProject] = useState(false);
  const [createProjectFormData, setCreateProjectFormData] = useState({});

  const getProjects = async () => {
    setIsLoading(true);
    const projects = await HttpClient.getAsync("projects");
    setProjects(projects);
    setIsLoading(false);
  };
  
  const deleteProject = async (id: string) => {
    await HttpClient.deleteAsync(`projects/${id}/`);
    await getProjects();
  };
  
  const createProject = async (project: any) => {
    await HttpClient.postAsync("projects", project);
    await getProjects();
  };

  useEffect(() => {
    (async () => {
      await getProjects();
    })();
  }, []);

  const onCreateProjectClick = () => setCreatingProject(true);
  const onCreatingProjectClose = () => setCreatingProject(false);
  const onFormSubmit = async () => {
    console.log("Create Project");
    console.log(createProjectFormData);
    await createProject(createProjectFormData);
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
              <ProjectsListPage
                projects={projects}
                deleteProject={deleteProject}
              />
              <CreateProjectPage
                formData={createProjectFormData}
                setFormData={setCreateProjectFormData}
                onCreatingProjectClose={onCreatingProjectClose}
                isCreatingProject={creatingProject}
                onFormSubmit={onFormSubmit}
              />
            </Content>
          </Layout>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
