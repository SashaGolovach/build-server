import React from "react";
import "antd/dist/antd.css";
import { Collapse, Empty } from "antd";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

const { Panel } = Collapse;

interface IProjectListPageProps {
  projects: any;
  deleteProject: (id: string) => {};
}

const ProjectsListPage = (props: IProjectListPageProps) => {
  const { projects, deleteProject } = props;

  return (
    <>
      {!projects || projects.length == 0 ? (
        <Empty className="empty-content" />
      ) : (
        projects.map((p: any) => (
          <ProjectListItem project={p} deleteProject={deleteProject} />
        ))
      )}
    </>
  );
};

export default ProjectsListPage;
