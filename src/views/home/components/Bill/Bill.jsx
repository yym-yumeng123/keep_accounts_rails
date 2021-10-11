import React, { useEffect, useState } from "react"
import { Tabs } from "antd-mobile"
import "./bill.scss"
import axios from "axios"

const Bill = () => {
  const [record, setRecord] = useState([])

  useEffect(() => {
    axios
      .get("/records")
      .then(function (response) {
        const {
          data: { resources, status, msg },
        } = response
        if (status === 200 && msg === "success") {
          console.log(resources)
          setRecord(resources)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className='bill'>
      <Tabs>
        <Tabs.TabPane title='全部' key='all'>
          {record.map((item) => {
            return (
              <div className='bill_item' key={item.id}>
                <p>{item.amount}</p>
                <p>{item.notes}</p>
              </div>
            )
          })}
        </Tabs.TabPane>
        <Tabs.TabPane title='支出' key='outgoings'>
          支出
        </Tabs.TabPane>
        <Tabs.TabPane title='收入' key='income'>
          收入
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Bill
