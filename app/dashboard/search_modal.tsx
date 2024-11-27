"use client"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Tabs } from "antd"
import type { TabsProps } from "antd"
import MyIcon from "components/icon"

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex items-center space-x-2">
        <MyIcon type="file_search" />
        <span className="text-sm font-medium">All</span>
        <span className="bg-red-100 px-1.5 py-1 text-xs text-red-700">1</span>
      </div>
    ),
    children: (
      <div className="flex items-center space-x-4 border-b py-4">
        <Avatar size={36} icon={<UserOutlined />} />
        <div>
          <p className="text-base font-normal">Albert Flores</p>
          <p className="text-xs font-normal text-gray-500">in Your Contact</p>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex items-center space-x-2">
        <MyIcon type="file" />
        <span className="text-sm font-medium">Companies</span>
        <span className="bg-gray-50 px-1.5 py-1 text-xs">0</span>
      </div>
    ),
    children: (
      <div className="py-9 text-center">
        <p className="text-base font-normal">No results</p>
        <p className="text-xs font-normal text-gray-500">There is no result in search or try with other keyword</p>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex items-center space-x-2">
        <MyIcon type="two_users" />
        <span className="text-sm font-medium text-gray-500">People</span>
        <span className="bg-gray-50 px-1.5 py-1 text-xs">1</span>
      </div>
    ),
    children: (
      <div className="flex items-center space-x-4 border-b py-4">
        <Avatar size={36} icon={<UserOutlined />} />
        <div>
          <p className="text-base font-normal">Albert Flores</p>
          <p className="text-xs font-normal text-gray-500">in Your Contact</p>
        </div>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="flex items-center space-x-2">
        <MyIcon type="two_users" />
        <span className="text-sm font-medium text-gray-500">Datasets</span>
        <span className="bg-gray-50 px-1.5 py-1 text-xs">0</span>
      </div>
    ),
    children: (
      <div className="py-9 text-center">
        <p className="text-base font-normal">No results</p>
        <p className="text-xs font-normal text-gray-500">There is no result in search or try with other keyword</p>
      </div>
    ),
  },
]

const SearchModal = () => {
  return <Tabs defaultActiveKey="1" items={tabs} onChange={() => {}} />
}

export default SearchModal
