import React, { useState } from "react"
import { TabBar } from "antd-mobile"
import Bill from "./components/Bill/Bill"
import PersonCenter from "./components/PersonCenter"
import Record from "./components/Record"
import Tag from "./components/Tag"
import "./home.scss"
import {
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"
const Home = () => {
  const tabs = [
    {
      key: "bill",
      title: "账单",
      icon: <AppOutline />,
    },
    {
      key: "tag",
      title: "标签",
      icon: <UnorderedListOutline />,
    },
    {
      key: "record",
      title: "记一笔",
      icon: <MessageFill />,
    },
    {
      key: "personalCenter",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ]

  const mapTabs = {
    bill: <Bill />,
    tag: <Tag />,
    record: <Record />,
    personalCenter: <PersonCenter />,
  }

  const [activeKey, setActiveKey] = useState("bill")
  return (
    <div className='home'>
      <div className='content'>{mapTabs[activeKey]}</div>
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
