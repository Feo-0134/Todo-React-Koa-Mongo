import React, { useState, useEffect } from "react";
import { List, Typography, Divider, Checkbox, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import http from './Util'

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


function TodoList() {
  const [data, setData] = useState([
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires."])

  useEffect( ()=>{
    const getTodos = async ()=> {
      const res = await http.get('/todo/find/')
      setData(res.data)
    }
    getTodos()
  },[])

  async function newTodo() {
    await http.post('/todo/add/', {"content": "hello", "finished": false})
  }

  return (
    <div>
      <Divider orientation="left">Todo List</Divider>
      <List
        header={<div>My Todos</div>}
        footer={
          <div>
            <Button  type="primary" shape="round" icon={<PlusOutlined />} onClick={newTodo}>
              New Item
            </Button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Checkbox onChange={onChange}></Checkbox> {item.content}
            <Typography.Text mark>[Remove]</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoList;
