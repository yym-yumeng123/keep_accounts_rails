import React from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"

import Header from "../../components/Header/Header"
import "./login.scss"

import { Form, Input, Button, Toast } from "antd-mobile"

const Login = () => {
  const [form] = Form.useForm()
  let history = useHistory()

  const onSubmit = () => {
    const values = form.getFieldsValue()

    axios
      .post("/sessions", values)
      .then(function (response) {
        console.log(response)
        const {
          data: { status, msg },
        } = response
        if (status === 200 && msg === "success") {
          Toast.show({
            content: "登录成功",
            position: "top",
          })
          history.push("/")
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <>
      <Header />
      <main>
        <Form
          form={form}
          layout='horizontal'
          footer={
            <Button block type='submit' color='primary' onClick={onSubmit}>
              登录
            </Button>
          }
        >
          <Form.Item
            name='email'
            label='邮箱'
            rules={[{ required: true, message: "邮箱不能为空" }]}
          >
            <Input onChange={console.log} placeholder='请输入邮箱' />
          </Form.Item>
          <Form.Item
            name='password'
            label='密码'
            rules={[{ required: true, message: "密码不能为空" }]}
          >
            <Input
              onChange={console.log}
              type={"password"}
              placeholder='请输入密码'
            />
          </Form.Item>
        </Form>
        <div className='action'>
          <Link to='/register'>新用户注册</Link>
        </div>
      </main>
    </>
  )
}

export default Login
