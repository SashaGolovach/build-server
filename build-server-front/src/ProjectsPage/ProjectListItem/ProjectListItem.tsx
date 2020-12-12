import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from "antd";
import { Layout, Menu, Collapse, Select, Skeleton } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const ProjectListItem = () => {
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  return (
    <Panel header="This is panel header 1" key="1" extra={genExtra()}>
      <div>text</div>
    </Panel>
  );
};

export default ProjectListItem;
