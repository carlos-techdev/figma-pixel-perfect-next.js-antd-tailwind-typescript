"use client"

import { Tabs } from "antd"
import type { TabsProps } from "antd"
// import Dataset from './dataset/page'
import Order from "./order"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Datasets Orders",
    children: <Order />,
  },
  {
    key: "2",
    label: "Dataset Marketplace",
    // children: <Dataset />,
  },
]

export default function Market() {
  return (
    <div>
      <div className="border-y p-4 text-2xl font-bold">Datasets</div>
      <div className="px-4">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  )
}
