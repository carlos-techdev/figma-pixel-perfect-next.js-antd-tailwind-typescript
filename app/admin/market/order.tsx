"use client"

import { Button, Drawer } from "antd"
import type { TableColumnsType } from "antd"
import { useState } from "react"
import MyIcon from "components/icon"
import { MyTable } from "components/table"
import ViewOrder from "./view"

interface DataType {
  key: React.Key
  username: string
  dataset: string
  date: string
  records: string
  status: string
  spent: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    username: "Robert",
    dataset: "Linkedin Dataset",
    date: "22/01/2024",
    records: "500",
    status: "Deliver",
    spent: "$25.5",
    action: "",
  },
  {
    key: "2",
    username: "Robert",
    dataset: "Linkedin Dataset",
    date: "22/01/2024",
    records: "500",
    status: "Deliver",
    spent: "$25.5",
    action: "",
  },
  {
    key: "3",
    username: "Robert",
    dataset: "Linkedin Dataset",
    date: "22/01/2024",
    records: "500",
    status: "Deliver",
    spent: "$25.5",
    action: "",
  },
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.username === "Disabled User", // Column configuration not to be checked
    username: record.username,
  }),
}

export default function Order() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const showDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Customer Name",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
      render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>
    },
    {
      title: "Dataset Name",
      dataIndex: "dataset",
      key: "dataset",
      sorter: (a, b) => a.dataset.localeCompare(b.dataset),
      render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>
    },
    {
      title: "Issued Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
      render: (source: any) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      responsive: ["md"],
      render: (source: any) => {
        let className
        switch (source) {
          case "Deliver":
            className = "bg-[#f4edf7] text-[#589e67]"
            break
          case "in Progress":
            className = "bg-[#edf2fe] text-[#4976f4]"
            break
          case "Awaiting Payment":
            className = "bg-[#f4edf7] text-[#d28e3d]"
            break
          default:
        }
        return <span className={`${className} text-[12px] leading-[17px] font-medium rounded-[4px] px-1.5 py-1 text-center`}>{source}</span>
      },
    },
    {
      title: "Records",
      dataIndex: "records",
      key: "records",
      sorter: (a, b) => a.records.localeCompare(b.records),
      responsive: ["sm"],
      render: (source: any) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
    },

    {
      title: "Spent",
      dataIndex: "spent",
      key: "spent",
      sorter: (a, b) => a.spent.localeCompare(b.spent),
      responsive: ["lg"],
      render: (source: any) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
    },
    {
      title: "Action",
      key: "action",
      responsive: ["xl"],
      render: () => (
        <div className="flex items-center">
          <span className="cursor-pointer"><MyIcon type="file_plus" /></span>
          <span className="ml-[11px] cursor-pointer" onClick={showDrawer}>
            <MyIcon type="edit" />
          </span>
          <span className="ml-2.5 cursor-pointer">
            <MyIcon type="trash_1" />
          </span>
        </div>
      ),
    },
  ]

  return (
    <div className="mt-2 pl-2 pr-[34px]">
      <MyTable
        size="middle"
        columns={columns}
        dataSource={data}
        pagination={false}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
      <Drawer
        title={<p className="text-base font-medium text-[#666d80]">Order Summary</p>}
        footer={
          <div className="p-6">
            <Button className="h-12 w-full bg-black text-base font-semibold text-white">Save</Button>
          </div>
        }
        onClose={closeDrawer}
        open={drawerOpen}
      >
        <ViewOrder />
      </Drawer>
    </div>
  )
}
