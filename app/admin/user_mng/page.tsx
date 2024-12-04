"use client"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Input } from "antd"
import type { TableColumnsType } from "antd"
import { useRouter } from "next/navigation"
import { useState } from "react"
import DashTitle from "components/dash_title"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  name: string
  email: string
  phone: string
  status: string
  location: string
  plan: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Robert Fox",
    email: "Pfr@example.com",
    phone: "(671) 555-0110",
    status: "Active",
    location: "Austin, USA",
    plan: "Free",
    action: "",
  },
  {
    key: "2",
    name: "DadRobert Fox",
    email: "Pfr@example.com",
    phone: "(671) 555-0110",
    status: "Active",
    location: "Austin, USA",
    plan: "Free",
    action: "",
  },
  {
    key: "3",
    name: "Roman Fox",
    email: "Pfr@example.com",
    phone: "(671) 555-0110",
    status: "Active",
    location: "Austin, USA",
    plan: "Free",
    action: "",
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

const UserMng = () => {
  const [keyword1, setKeyword1] = useState("")
  const router = useRouter()

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <Avatar size={24} icon={<UserOutlined />} />
          <p className="text-[14px] leading-[21px]">{source}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="envelope" />
          <p className="text-[14px] font-medium leading-[21px] underline">{source}</p>
        </div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      responsive: ["sm"],
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="phone" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      responsive: ["lg"],
      render: (source: any) => (
        <span className="rounded bg-[#edf2fe] px-1.5 py-1 text-center text-[12px] leading-[16.8px] text-[#16a3a4]">
          {source}
        </span>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
      responsive: ["lg"],
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="mappin" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
      sorter: (a, b) => a.plan.localeCompare(b.plan),
      responsive: ["xl"],
      render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
    },
    {
      title: "",
      key: "action",
      responsive: ["xl"],
      render: () => (
        <div className="flex items-center space-x-1">
          <span className="cursor-pointer">
            <MyIcon type="file_plus" />
          </span>
          <span className="cursor-pointer" onClick={() => router.push("/admin/user_mng/account")}>
            <MyIcon type="edit_user" />
          </span>
          <span className="cursor-pointer">
            <MyIcon type="trash_1" />
          </span>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="mr-8 border-y p-4">
        <DashTitle />
      </div>
      <div className="mx-4 mt-4 rounded border bg-white p-4">
        <div className="mb-4 flex flex-row-reverse gap-2">
          <Button size="large" className="w-[98px] rounded border border-black font-medium text-black">
            <div className="flex items-center justify-center space-x-2">
              <MyIcon type="filter" />
              <span>Actions</span>
            </div>
          </Button>
          <Button size="large" className="w-[98px] rounded border border-black font-medium text-black">
            <div className="flex items-center justify-center space-x-2">
              <MyIcon type="sort" />
              <span>Sort By</span>
            </div>
          </Button>
          <Input
            className="w-[360px]"
            id="search_prospect"
            size="large"
            placeholder="Search"
            value={keyword1}
            onChange={(e) => setKeyword1(e.target.value)}
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
        </div>
        <MyTable
          columns={columns}
          dataSource={data}
          pagination={false}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
        />
      </div>
      <div className="mt-8 pl-4">
        <MyPagination />
      </div>
    </div>
  )
}

export default UserMng
