import React from "react"
import axios from "axios"
import "./login.scss"
import logo from "../../assets/logo.png"

import { Form, Input, Button } from "antd-mobile"

const Login = () => {
  const [form] = Form.useForm()

  const onSubmit = () => {
    const values = form.getFieldsValue()

    axios
      .post("/api/sessions", values)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <>
      <header>
        <img className='logo' src={logo} alt='' />
        <p>旺财记账</p>
      </header>
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
      </main>
    </>
  )
}

export default Login
