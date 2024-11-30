"use client"

import { Tabs } from "antd"
import type { TabsProps } from "antd"
import Dataset from "./dataset/page"
import MyMarket from "./my_market"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <p className="text-[14px] font-semibold leading-[21px] text-black hover:text-black">My Datasets</p>,
    children: <MyMarket />,
  },
  {
    key: "2",
    label: <p className="text-[14px] font-semibold leading-[21px] text-black hover:text-black">Dataset Marketplace</p>,
    children: <Dataset />,
  },
]

export default function Market() {
  return (
    <div>
      <div className="border-y p-5 text-[24px] font-medium leading-[28.8px]">Datasets</div>
      <div className="px-4">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  )
}
