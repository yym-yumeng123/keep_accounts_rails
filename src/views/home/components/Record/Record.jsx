import React, { useState } from "react"
import axios from "axios"
import { Selector, Input, Button, Toast } from "antd-mobile"

const ItemList = [
  {
    label: "支出",
    value: "outgoings",
  },
  {
    label: "收入",
    value: "income",
  },
]

const Record = () => {
  const [category, setCategory] = useState("1")
  const [amount, setAmount] = useState("")
  const [notes, setNotes] = useState("")

  const handleChagneCategory = (arr) => {
    if (arr.length) {
      setCategory(arr[0])
    }
  }

  const handleChangeAmount = (val) => {
    setAmount(val)
  }

  const handleChangeNotes = (val) => {
    setNotes(val)
  }

  const handleAddRecord = () => {
    console.log(category, amount, notes)
    axios
      .post("/records", { category, amount, notes })
      .then(function (response) {
        const {
          data: { resources, status, msg },
        } = response
        if (status === 200 && msg === "success") {
          Toast.show({
            content: "成功记一笔",
            position: "top",
          })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div>
      <div className='select'>
        <Selector
          options={ItemList}
          value={[category]}
          onChange={handleChagneCategory}
        />
      </div>
      <div>
        <Input
          type='number'
          placeholder='请输入金额'
          value={amount}
          clearable
          onChange={handleChangeAmount}
        />
      </div>

      <div>
        <Input
          type='textarea'
          placeholder='请输入备注'
          value={notes}
          clearable
          onChange={handleChangeNotes}
        />
      </div>

      <div>
        <Button block color='primary' size='large' onClick={handleAddRecord}>
          记一笔
        </Button>
      </div>
    </div>
  )
}

export default Record
