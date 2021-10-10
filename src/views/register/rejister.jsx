import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"

import { Form, Input, Button } from "antd-mobile"

const Register = () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    console.log(values, "434")
  }
  return (
    <div>
      <Header />
      <main>
        <Form
          form={form}
          layout='horizontal'
          footer={
            <Button block type='submit' color='primary' onClick={onSubmit}>
              注册
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
              type='password'
              placeholder='请输入密码'
            />
          </Form.Item>
          <Form.Item
            name='password_confirmation'
            label='确认密码'
            rules={[{ required: true, message: "确认密码不能为空" }]}
          >
            <Input
              onChange={console.log}
              type='password'
              placeholder='请输入确认密码'
            />
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to='/login'>注册过了，直接登录</Link>
        </div>
      </main>
    </div>
  )
}

export default Register
