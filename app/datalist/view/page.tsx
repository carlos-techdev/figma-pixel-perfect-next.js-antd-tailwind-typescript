"use client"

import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import type { TableColumnsType } from "antd"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  name: string
  email: string
  phone: string
  location: string
  job: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Daniel Fox",
    email: "robertfox@example.com",
    phone: "(671) 555-0110",
    location: "Austin, USA",
    job: "CMO",
  },
  {
    key: "2",
    name: "Robert Fox",
    email: "robertfox@example.com",
    phone: "(671) 555-0110",
    location: "Austin, USA",
    job: "CMO",
  },
  {
    key: "3",
    name: "Robert Fox",
    email: "robertfox@example.com",
    phone: "(671) 555-0110",
    location: "Austin, USA",
    job: "CMO",
  },
  {
    key: "4",
    name: "Robert Fox",
    email: "robertfox@example.com",
    phone: "(671) 555-0110",
    location: "Austin, USA",
    job: "CMO",
  },
  {
    key: "5",
    name: "Robert Fox",
    email: "robertfox@example.com",
    phone: "(671) 555-0110",
    location: "Austin, USA",
    job: "CMO",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <Avatar size={24} icon={<UserOutlined />} />
        <p className="font-semibold">{source}</p>
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
        <p className="font-semibold underline">{source}</p>
      </div>
    ),
  },

  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    responsive: ["md"],
    sorter: (a, b) => a.phone.localeCompare(b.phone),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <MyIcon type="phone" />
        <p className="text-gray-500">{source}</p>
      </div>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    responsive: ["lg"],
    sorter: (a, b) => a.location.localeCompare(b.location),
    render: (source: any) => (
      <div className="flex items-center space-x-2">
        <MyIcon type="mappin" />
        <p className="text-gray-500">{source}</p>
      </div>
    ),
  },
  {
    title: "Job Title",
    dataIndex: "job",
    key: "job",
    responsive: ["lg"],
    sorter: (a, b) => a.job.localeCompare(b.job),
    render: (source: any) => <p className="text-gray-500">{source}</p>,
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

export default function View() {
  return (
    <div>
      <div className="border-y p-4">
        <span className="flex items-center text-2xl font-bold">Contacts Lists</span>
      </div>
      <div className="p-4">
        <div className="mt-2">
          <MyTable
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
        <div className="mt-8 text-center">
          <MyPagination />
        </div>
      </div>
    </div>
  )
}
