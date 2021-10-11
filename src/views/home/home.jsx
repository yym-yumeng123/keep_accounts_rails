import React, { useState } from "react"
import { Badge, TabBar } from "antd-mobile"
import "./home.scss"
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"
const Home = () => {
  const tabs = [
    {
      key: "home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "todo",
      title: "标签",
      icon: <UnorderedListOutline />,
    },
    {
      key: "message",
      title: "记一笔",
      icon: <MessageFill />,
    },
    {
      key: "personalCenter",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState("home")
  return (
    <div className='home'>
      <div className='content'>
        <div className='item' style={{ height: "200px" }}>
          我是首页
        </div>
      </div>
      <div className='tabBar'>
        <TabBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Home
