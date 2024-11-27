"use client"

import { Button, Input, Modal } from "antd"
import { useEffect, useState } from "react"
import DashTitle from "components/dash_title"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import MyRangePicker from "components/rangepicker"
import Credit from "./credit"
import Prospect from "./prospect"
import SearchModal from "./search_modal"

const Dashboard = () => {
  const [keyword, setKeyword] = useState<string>("")
  const [searchDialog, setSearchDialog] = useState<boolean>(false)

  const handleOk = () => {
    setSearchDialog(false)
  }

  const handleCancel = () => {
    setSearchDialog(false)
  }

  useEffect(() => {
    if (keyword.length >= 3) {
      setSearchDialog(true)
    }
  }, [keyword])

  return (
    <div>
      <div className="mr-8 border-y p-4">
        <DashTitle />
      </div>
      <Credit />
      <div className="flex flex-row-reverse pr-4 lg:pr-16">
        <MyRangePicker type="month" />
      </div>
      <div className="mx-4 mt-4 rounded border bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[20px] font-medium leading-6">Latest Prospects</div>
          <div className="flex space-x-4">
            <Input
              id="search_prospect"
              size="large"
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
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
                <MyIcon type="download" />
                <span className="text-sm font-medium">Import</span>
              </div>
            </Button>
          </div>
        </div>
        <Prospect />
      </div>
      <div className="mt-8 pl-4">
        <MyPagination />
      </div>
      <Modal width={640} open={searchDialog} onOk={handleOk} onCancel={handleCancel} footer={null} centered>
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
