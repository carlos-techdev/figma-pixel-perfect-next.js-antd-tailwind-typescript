"use client"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Drawer, Input } from "antd"
import type { TableColumnsType } from "antd"
import { useState } from "react"
import SearchColumn from "components/filter/column"
import Filter from "components/filter/filter"
import MyIcon from "components/icon"
import { FaceBook, Linked, LinkedIn, Twitter } from "components/icons"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"
import View from "./view"

export default function People() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const showDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const [column, setColumn] = useState(false)

  const showColumn = () => {
    setColumn(true)
  }

  const handlColumneOk = () => {
    setColumn(false)
  }

  const handleColumnCancel = () => {
    setColumn(false)
  }

  interface DataType {
    key: React.Key
    name: string
    job: string
    company: string
    social: string
    location: string
    action: string
  }

  const data: DataType[] = [
    {
      key: "1",
      name: "Robert Fox",
      job: "CFO",
      company: "google",
      social: "",
      location: "Austin, USA",
      action: "",
    },
    {
      key: "2",
      name: "Fla",
      job: "CEO",
      company: "google",
      social: "",
      location: "Austin, USA",
      action: "",
    },
    {
      key: "3",
      name: "Robert Fox",
      job: "CFO",
      company: "google",
      social: "",
      location: "Austin, USA",
      action: "",
    },
    {
      key: "4",
      name: "Robert Fox",
      job: "CFO",
      company: "google",
      social: "",
      location: "Austin, USA",
      action: "",
    },
    {
      key: "5",
      name: "Robert Fox",
      job: "CFO",
      company: "google",
      social: "",
      location: "Austin, USA",
      action: "",
    },
  ]

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (source: any) => (
        <div className="hover: flex cursor-pointer items-center space-x-2" onClick={showDrawer}>
          <Avatar size={24} icon={<UserOutlined />} />
          <p className="text-[14px] leading-[21px]">{source}</p>
        </div>
      ),
    },
    {
      title: "Job Title",
      dataIndex: "job",
      key: "job",
      sorter: (a, b) => a.job.localeCompare(b.job),
      render: (source: any) => <p className="text-[14px] font-medium leading-[21px]">{source}</p>,
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      responsive: ["sm"],
      sorter: (a, b) => a.company.localeCompare(b.company),
      render: (source: any) => (
        <div className="flex items-center space-x-1">
          <MyIcon type="google" />
          <p className="text-[14px] font-medium leading-[21px]">{source}</p>
        </div>
      ),
    },
    {
      title: "Social",
      dataIndex: "social",
      key: "social",
      responsive: ["lg"],
      render: () => (
        <div className="flex items-center space-x-2">
          <span className="cursor-pointer">
            <Linked />
          </span>
          <span className="cursor-pointer">
            <LinkedIn />
          </span>
          <span className="cursor-pointer">
            <FaceBook />
          </span>
          <span className="cursor-pointer">
            <Twitter />
          </span>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["xl"],
      sorter: (a, b) => a.location.localeCompare(b.location),
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="mappin" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Contact Info",
      key: "action",
      responsive: ["xl"],
      render: () => (
        <div className="flex items-center space-x-4">
          <Button className="border border-black" icon={<MyIcon type="phone" />}></Button>
          <Button className="border border-black" icon={<MyIcon type="envelope_simple" />}></Button>
          <div className="cursor-pointer hover:rounded-full hover:bg-gray-200">
            <MyIcon type="three_dots" />
          </div>
        </div>
      ),
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  }

  return (
    <>
      <div className="mr-8 border-y p-4 text-2xl font-bold">Search</div>
      <div className="flex">
        <div className="lg:w-1/4">
          <Filter />
        </div>
        <div className="space-y-2 pr-2 pt-[18px] lg:w-3/4">
          <div className="flex justify-between">
            <Input
              className="w-1/3"
              id="search2"
              size="large"
              placeholder="Search"
              prefix={<MyIcon type="magnifying" />}
            />
            <div className="flex space-x-2 pr-2">
              <div className="border-r">
                <Button className="mr-2 flex h-full items-center space-x-1 rounded-md" onClick={showColumn}>
                  <MyIcon type="circle_three_plus" />
                  <span>Columns</span>
                </Button>
              </div>
              <Button className="h-full rounded-md">Import</Button>
            </div>
          </div>
          <div className="pt-[11px]">
            <MyTable
              size="middle"
              bordered
              columns={columns}
              dataSource={data}
              pagination={false}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
            />
          </div>
          <div className="pt-20">
            <MyPagination />
          </div>
        </div>
      </div>
      <Drawer title="Contact Details" onClose={closeDrawer} open={drawerOpen}>
        <View />
      </Drawer>
      <SearchColumn column={column} handleColumnOk={handlColumneOk} handleColumnCancel={handleColumnCancel} />
    </>
  )
}
