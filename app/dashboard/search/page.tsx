"use client"

import { Button, Input, Modal, Select } from "antd"
import { useContext, useEffect, useState } from "react"
import { BarChart } from "components/chart"
import DashTitle from "components/dash_title"
import MyIcon from "components/icon"
import MyRangePicker from "components/rangepicker"
import { HeaderContext } from "context/main"
import Credit from "../credit"
import Prospect from "../prospect"
import SearchModal from "../search_modal"

const Dashboard = () => {
  const [rangeType, setRangeType] = useState("month")
  const [keyword, setKeyword] = useState("")
  const [showModal, setShowModal] = useState(false)

  const show1 = () => {
    if (keyword.length > 3) {
      setShowModal(true)
    }
  }

  const handleOk = () => {
    setShowModal(false)
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  const { searchVal } = useContext(HeaderContext)

  useEffect(() => {
    if (searchVal.length > 3) {
      setShowModal(true)
    }
  }, [searchVal])

  return (
    <div>
      <div className="mr-8 border-y p-4">
        <div className="flex items-center space-x-4 text-2xl font-bold">
          <DashTitle />
        </div>
      </div>
      <Credit />
      <div className="mx-4 border p-4 lg:pr-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium leading-[24px]">Data Revealed</p>
            <div className="mt-4 flex items-center space-x-3">
              <p className="text-[32px] font-medium leading-[38px]">64,23%</p>
              <div className="flex items-center space-x-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 text-[#589e67]">
                <MyIcon type="trend_up" />
                <p>12%</p>
              </div>
            </div>
            <p className="mt-2 text-[14px] font-medium leading-[21px] text-[#727272]">Data request by type over time</p>
          </div>
          <div className="md:flex md:space-x-2">
            <MyRangePicker type={rangeType} />
            <Select
              value={rangeType}
              onChange={(val) => setRangeType(val)}
              className="w-30 mt-2 md:mt-0"
              options={[
                { value: "month", label: "Month" },
                { value: "date", label: "date" },
              ]}
            />
          </div>
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div className="mx-4 mt-4 rounded border bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Latest Prospects</div>
          <div className="flex space-x-2">
            <Input
              id="search_prospect"
              size="large"
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={show1}
              prefix={<MyIcon type="magnifying" />}
              suffix={
                <>
                  <MyIcon type="command" />
                  <span className="ml-1">
                    <MyIcon type="f" />
                  </span>
                </>
              }
            />
            <Button size="large" className="w-[98px] rounded border border-black font-medium text-black">
              <div className="flex items-center justify-center space-x-2">
                <MyIcon type="sort" />
                <span>Sort By</span>
              </div>
            </Button>
            <Button size="large" className="w-[98px] rounded border border-black font-medium text-black">
              <div className="flex items-center justify-center space-x-2">
                <MyIcon type="filter" />
                <span>Actions</span>
              </div>
            </Button>
          </div>
        </div>
        <Prospect />
      </div>
      <Modal width={640} open={showModal} onOk={handleOk} onCancel={handleCancel} footer={null} centered>
        <Input
          id="search_people"
          size="middle"
          className="w-1/2 border-0"
          placeholder="Search"
          prefix={<MyIcon type="magnifying" />}
        />
        <SearchModal />
      </Modal>
    </div>
  )
}

export default Dashboard
