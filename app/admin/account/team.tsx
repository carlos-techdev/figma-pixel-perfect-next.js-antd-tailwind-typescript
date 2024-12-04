"use client"

import { UserAddOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Button, Checkbox, Input, Modal, Select } from "antd"
import type { TableColumnsType } from "antd"
import { useState } from "react"
import MyIcon from "components/icon"
import MyInput from "components/input"
import { MyBlackTable } from "components/table"

const status_options = [
  { value: "active", label: <p className="text-green-600">Active</p> },
  { value: "pending", label: <p className="text-purple-600">Pending</p> },
]

const role_options = [
  { value: "admin", label: <p className="text-primary-600">Admin</p> },
  { value: "employee", label: <p className="text-purple-600">Employee</p> },
]

interface DataType {
  key: React.Key
  name: string
  date: string
  level: string
  status: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "nfe@example.com",
    date: "Feb 5, 2023",
    level: "Admin",
    status: "Active",
  },
  {
    key: "2",
    name: "frnfe@example.com",
    date: "Feb 5, 2023",
    level: "Employee",
    status: "Invite Pending",
  },
  {
    key: "3",
    name: "frnfe@example.com",
    date: "Feb 5, 2023",
    level: "Employee",
    status: "Invite Pending",
  },
]

const permissions: string[] = [
  "Admin Dashboard",
  "User Management",
  "Traffic Analytics",
  "Database/People",
  "Database/Companies",
  "Database/Scraper",
  "Marketplace/Datasets",
  "Finance/Sales Dashboard",
  "Finance/Subscriptions/Subscriptions & Add-on",
  "Finance/Subscriptions/Datasets Packages",
  "Finance/Invoices",
]

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "USER",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (source: any) => (
        <div className="flex cursor-pointer items-center space-x-2" onClick={showModal}>
          <Avatar size={24} icon={<UserOutlined />} />
          <p>{source}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="calendar" />
          <p>{source}</p>
        </div>
      ),
    },
    {
      title: "ACCESS LEVEL",
      dataIndex: "level",
      key: "level",
      sorter: (a, b) => a.level.localeCompare(b.level),
      render: (source: any) => {
        let className
        switch (source) {
          case "Admin":
            className = "bg-primary-100 text-primary-500"
            break
          case "Employee":
            className = "bg-purple-100 text-purple-600"
            break
          default:
        }
        return <span className={`${className} rounded p-1 text-center`}>{source}</span>
      },
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      responsive: ["md"],
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (source: any) => {
        let bgColor, textColor, badgeColor, width
        switch (source) {
          case "Active":
            bgColor = "bg-[#eefff0]"
            textColor = "text-[#589e67]"
            badgeColor = "#589e67"
            width = "w-[81px]"
            break
          case "Invite Pending":
            bgColor = "bg-[#f7f7e8]"
            textColor = "text-[#b1ab1d]"
            badgeColor = "#b1ab1d"
            width = "w-[130px]"
            break
          default:
        }
        return (
          <div
            className={`flex items-center justify-center  space-x-2 ${bgColor} ${width} h-[25px] rounded-[36px] font-medium`}
          >
            <Badge color={badgeColor} />
            <p className={textColor}>{source}</p>
          </div>
        )
      },
    },
  ]

  const inviteMember = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className="space-y-2 border-b pb-2">
        <p className="text-[20px] font-semibold leading-[27px]">Team</p>
        <p className="text-base text-[#666d80]">Manage your team</p>
      </div>
      <div className="flex flex-row-reverse items-center pb-5 pt-8">
        <Button onClick={inviteMember} className="h-10 w-[170px] bg-black text-base font-medium text-white">
          <div className="flex items-center space-x-2">
            <UserAddOutlined />
            <span>Invite Member</span>
          </div>
        </Button>
        <div className="mr-2 w-full">
          <MyInput />
        </div>
      </div>
      <div className="mt-5">
        <MyBlackTable size="middle" columns={columns} dataSource={data} pagination={false} />
      </div>
      <Modal
        centered
        title={<p className="text-[18px] font-medium leading-[22px]">User Permissions</p>}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="p-2">
          <div>
            <p className="text-[14px] leading-[21px]">Email Address</p>
            <Input className="mt-2 h-12" id="user_email" defaultValue="ne@example.com" />
          </div>
          <div className="mt-2">
            <p className="text-[14px] leading-[21px]">Status</p>
            <Select className="mt-2 w-full" defaultValue="active" options={status_options} />
          </div>
          <div className="mt-2">
            <p className="text-[14px] leading-[21px]">Role</p>
            <Select className="mt-2 w-full" defaultValue="employee" options={role_options} />
          </div>
          <p className="mt-2 text-[14px] leading-[21px]">Access Permissions</p>
          {permissions.map((permission, id) => (
            <div className="py-1 text-gray-500" key={id}>
              <Checkbox id={permission}>{permission}</Checkbox>
            </div>
          ))}
          <div className="mt-[30px] grid grid-cols-2 gap-4 px-8">
            <Button onClick={handleCancel} className="h-10 w-full bg-gray-200 text-base font-medium">
              Cancel
            </Button>
            <Button onClick={handleOk} className="h-10 w-full bg-black text-base font-medium text-white">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
