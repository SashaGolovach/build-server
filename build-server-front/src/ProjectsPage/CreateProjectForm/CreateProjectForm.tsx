import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { RouteComponentProps } from "react-router-dom";

const { Option } = Select;

interface ICreateProjectFormProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<{}>>;
}

const CreateProjectForm = (props: ICreateProjectFormProps) => {
  const { formData, setFormData } = props;
  const formValuesChange = (field: any) => {
    const entries = Object.entries(field);
    if(entries[0].toString() == "Artifacts" || entries[0].toString() == "BuildCommands"){
      const listFieldEntries = Object.entries(entries[1][0]);
    }
    else{
      const fieldName = entries[0][0];
      const fieldValue = entries[0][1];
      //console.log(entries);
      formData[fieldName.toString()] = fieldValue;
    }
    setFormData(formData);
  };

  return (
    <Form
      layout="vertical"
      hideRequiredMark
      autoComplete="off"
      onValuesChange={formValuesChange}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="Name" label="Name">
            <Input placeholder="Enter project name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="GithubRepoUrl" label="Github Repository Url">
            <Input
              style={{ width: "100%" }}
              addonBefore="https://"
              addonAfter=".git"
              placeholder="Enter github repo url"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="SourceLocation" label="Folder">
            <Input placeholder="Enter project folder" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please choose the type" }]}
          >
            <Select placeholder="Please choose the type">
              <Option value="private">Private</Option>
              <Option value="public">Public</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="description" label="Artifacts">
        <Form.List name="Artifacts">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "first"]}
                    fieldKey={[field.fieldKey, "first"]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "last"]}
                    fieldKey={[field.fieldKey, "last"]}
                  >
                    <Input placeholder="Relative Path" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Artifact
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item name="description" label="Build Commands">
        <Form.List name="BuildCommands">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "first"]}
                    fieldKey={[field.fieldKey, "first"]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "last"]}
                    fieldKey={[field.fieldKey, "last"]}
                  >
                    <Input placeholder="Script" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Build Command
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="description" label="Command editor (just use to edit your scripts)">
            <Input.TextArea rows={4} placeholder="Paste your code here" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateProjectForm;
