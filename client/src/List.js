import React from "react";
import { List, Typography, Divider, Checkbox, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import http from './Util'

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

async function getTodos(e) {
    console.log('hint')
    const res = await http.get('/todo/find/')
    console.log(res)
}

function TodoList() {
  return (
    <div>
      <Divider orientation="left">Todo List</Divider>
      <List
        header={<div>My Todos</div>}
        footer={
          <div>
            <Button onClick={getTodos} type="primary" shape="round" icon={<PlusOutlined />}>
              New Item
            </Button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Checkbox onChange={onChange}></Checkbox> {item}
            <Typography.Text mark>[Remove]</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoList;
