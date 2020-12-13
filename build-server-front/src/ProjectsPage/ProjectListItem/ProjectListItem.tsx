import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from "antd";
import { Layout, Menu, Collapse, Select, Skeleton } from "antd";
import { SettingOutlined, DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

interface IProps {
  project: any;
  deleteProject: (id: string) => {};
}

const ProjectListItem = (props: IProps) => {
  const { project, deleteProject } = props;
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
    <Collapse expandIconPosition="left">
      <Panel header={project.Name} key={project.Id} extra={genExtra(project)}>
        <div>text</div>
      </Panel>
    </Collapse>
  );
};

export default ProjectListItem;
