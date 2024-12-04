"use client"

import { Tabs } from "antd"
import type { TabsProps } from "antd"
import Checkout from "./checkout"
import Integration from "./integration"
import Security from "./security"
import Team from "./team"
import User from "./user"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Personal Info",
    children: <User />,
  },
  {
    key: "2",
    label: "Checkout",
    children: <Checkout />,
  },
  {
    key: "3",
    label: "Security",
    children: <Security />,
  },
  {
    key: "4",
    label: "Integrations",
    children: <Integration />,
  },
  {
    key: "5",
    label: "Team",
    children: <Team />,
  }
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
