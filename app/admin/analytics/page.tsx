"use client"

import { Select, Tabs } from "antd"
import type { TabsProps } from "antd"
import { DoughnutChart, LineChart } from "components/chart"
import DashTitle from "components/dash_title"
import VisitDevice from "./device"
import AnalyticsHeader from "./header"
import VisitSearch from "./search"
import Session from "./session"
import Traffic from "./traffic"
import UsersLast from "./user_last"
import UserTime from "./user_time"
import Visit from "./visit"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Locations",
    children: (
      <div className="mt-[24px]">
        <DoughnutChart />
      </div>
    ),
  },
  {
    key: "2",
    label: "Channels",
    children: (
      <div className="mt-[24px]">
        <DoughnutChart />
      </div>
    ),
  },
  {
    key: "3",
    label: "Devices",
    children: (
      <div className="mt-[24px]">
        <DoughnutChart />
      </div>
    ),
  },
]

const options = [
  {
    value: "1",
    label: <p className="text-[13px] font-semibold leading-5 text-[#5c6370]">Last 7 days</p>,
  },
  {
    value: "2",
    label: <p className="text-[13px] font-semibold leading-5 text-[#5c6370]">Last 7 days</p>,
  },
]

export default function Analytics() {
  return (
    <div className="pl-[23px] pr-[37px]">
      <div className="border-y py-5">
        <DashTitle />
      </div>
      <AnalyticsHeader />
      <div className="mb-[25px] flex flex-row-reverse">
        <div className="w-[345px] rounded-xl border border-[#eeeff1]">
          <Tabs centered defaultActiveKey="1" items={items} />
        </div>
        <div className="mr-6 grow">
          <div className="rounded-xl border border-[#eeeff1] pb-8 pt-6">
            <div className="flex justify-between border-b px-6 pb-4">
              <div className="space-y-1">
                <p className="text-[20px] font-bold leading-[24px] text-[#2e3138]">Website visitors</p>
                <p className="text-[14px] font-medium leading-[22px] text-[#5c6370]">
                  {"Your site's traffic over time"}
                </p>
              </div>
              <div className="flex items-center justify-between space-x-8">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-[20.5px] border-t-2 border-[#5066f7]"></div>
                    <div className="text-[14px] leading-[22px] text-[#5c6370]">Last 7 days</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-[21px] border-t-2 border-dotted border-[#91b0fd]"></div>
                      <div className="text-[14px] leading-[22px] text-[#5c6370]">Previous week</div>
                    </div>
                  </div>
                </div>
                <div>
                  <Select defaultValue="1" className="h-10 w-[129px]" options={options} />
                </div>
              </div>
            </div>

            <div className="pl-6 pt-11">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[31px] grid gap-[5px] sm:grid-cols-3">
        <div>
          <UsersLast />
        </div>
        <div>
          <Session />
        </div>
        <div>
          <UserTime />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Traffic />
        <div className="grow pr-6">
          <Visit />
        </div>
      </div>
      <div className="flex flex-row-reverse pt-[13px] gap-6">
        <div className="w-[755px]">
          <VisitSearch />
        </div>
        <div className="grow">
          <VisitDevice />
        </div>
      </div>
    </div>
  )
}
