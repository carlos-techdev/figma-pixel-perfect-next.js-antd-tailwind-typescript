"use client"

import { Tabs } from "antd"
import type { TabsProps } from "antd"
import Billing from "./billing"
import Company from "./company"
import Integration from "./integration"
import Plan from "./plan"
import Security from "./security"
import Team from "./team"
import User from "./user"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <p className="text-[14px] font-semibold leading-[21px]">Personal Info</p>,
    children: <User />,
  },
  {
    key: "2",
    label: <p className="text-[14px] font-semibold leading-[21px]">Company Info</p>,
    children: <Company />,
  },
  {
    key: "3",
    label: <p className="text-[14px] font-semibold leading-[21px]">Billing</p>,
    children: <Billing />,
  },
  {
    key: "4",
    label: <p className="text-[14px] font-semibold leading-[21px]">Plan Overview</p>,
    children: <Plan />,
  },
  {
    key: "5",
    label: <p className="text-[14px] font-semibold leading-[21px]">Security</p>,
    children: <Security />,
  },
  {
    key: "6",
    label: <p className="text-[14px] font-semibold leading-[21px]">Integrations</p>,
    children: <Integration />,
  },
  {
    key: "7",
    label: <p className="text-[14px] font-semibold leading-[21px]">Team</p>,
    children: <Team />,
  },
]

export default function Market() {
  return (
    <div>
      <div className="border-y p-4 text-2xl font-bold">Setting</div>
      <div className="px-5">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  )
}
