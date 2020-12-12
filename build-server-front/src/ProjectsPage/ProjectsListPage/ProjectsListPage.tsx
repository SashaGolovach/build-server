import React from "react";
import "antd/dist/antd.css";
import { Collapse, Empty } from "antd";
import { SettingOutlined, DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

interface ICreateProjectFormProps {
  projects: any;
  deleteProject: (id: string) => {};
}

const ProjectsListPage = (props: ICreateProjectFormProps) => {
  const { projects, deleteProject } = props;
  const genExtra = (project: any) => (
    <>
      <SettingOutlined
        onClick={(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
      <DeleteOutlined
        style={{ paddingLeft: "10px" }}
        onClick={() => deleteProject(project.Id)}
      />
    </>
  );

  return (
    <>
      {!projects || projects.length == 0 ? (
        <Empty className="empty-content" />
      ) : (
        <Collapse expandIconPosition="left">
          {projects.map((p: any) => (
            <Panel header={p.Name} key={p.Id} extra={genExtra(p)}>
              <div>text</div>
            </Panel>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default ProjectsListPage;
