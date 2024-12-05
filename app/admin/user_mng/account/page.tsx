"use client"

import { Tabs } from "antd"
import type { TabsProps } from "antd"
import Company from "./company"
import Credit from "./credit"
import Plan from "./plan"
import Security from "./security"
import User from "./user"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Personal Info",
    children: <User />,
  },
  {
    key: "2",
    label: "Company Info",
    children: <Company />,
  },
  {
    key: "3",
    label: "Credit Add-on",
    children: <Credit />,
  },
  {
    key: "4",
    label: "Plan Overview",
    children: <Plan />,
  },
  {
    key: "5",
    label: "Security",
    children: <Security />,
  },
]

export default function Market() {
  return (
    <div>
      <div className="border-y p-4 text-2xl font-bold">Setting</div>
      <div className="px-4">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  )
}
