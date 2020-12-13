import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Drawer } from "antd";

import CreateProjectForm from "../CreateProjectForm/CreateProjectForm";

interface ICreateProjectPageProps {
  formData : any,
  setFormData : any
  onCreatingProjectClose : any,
  isCreatingProject : boolean,
  onFormSubmit : () => {}
}

const CreateProjectPage = (props: ICreateProjectPageProps) => {
  return (
    <>
      <Drawer
        title="Create a new project"
        width={720}
        onClose={props.onCreatingProjectClose}
        visible={props.isCreatingProject}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={props.onCreatingProjectClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={props.onFormSubmit} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <CreateProjectForm
          formData={props.formData}
          setFormData={props.setFormData}
        />
      </Drawer>
    </>
  );
};

export default CreateProjectPage;
