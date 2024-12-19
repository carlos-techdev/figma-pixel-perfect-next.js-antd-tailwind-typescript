"use client"

import { Progress, Select } from "antd"
import { useState } from "react"
import { SalesLineChart } from "components/chart"
import MyIcon from "components/icon"
import MyRangePicker from "components/rangepicker"
import Gap from "./gap"

export default function Sale() {
  const [rangeType, setRangeType] = useState("month")

  return (
    <div className="pl-[23px]">
      <div className="border-y py-5 text-[24px] font-bold leading-[28.8px]">Sales Dashboard</div>
      <Gap />
      <div className="mt-[15px] border p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-[20px] font-medium leading-6">Sales Revenues</p>
            <div className="flex items-center space-x-2">
              <p className="text-[32px] font-medium leading-[38.4px]">$52,515k</p>
              <div className="flex items-center space-x-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 text-[12px] leading-[16.8px] text-[#589e67] ">
                <MyIcon type="trend_up" />
                <p>12%</p>
              </div>
            </div>
            <p className="text-[14px] leading-[21px] text-[#727272]">This year</p>
          </div>
          <div className="md:flex md:space-x-2">
            <MyRangePicker type={rangeType} />
            <Select
              value={rangeType}
              onChange={(val) => setRangeType(val)}
              className="w-30 mt-2 md:mt-0"
              options={[
                { value: "month", label: "Month" },
                { value: "date", label: "date" },
              ]}
            />
          </div>
        </div>
        <div>
          <SalesLineChart />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <div className="mr-[58px] mt-[22px] w-[282px] gap-4 space-y-4 border px-5 pt-5">
          <div className="text-[20px] font-medium leading-6">Top Datasets Orders</div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[21px]">1. Linkedin B2B</p>
            <div className="gap-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 font-medium">252</div>
          </div>
        </div>
        <div className="mt-[17px] grow space-y-6">
          <div className="space-y-4 rounded-lg border border-[#e4e4e4] p-5 pb-[29px]">
            <p className="text-[20px] font-medium leading-6">Subscriptions Summary</p>
            <div className="flex items-center space-x-3">
              <p className="text-[32px] font-medium leading-[38.4px]">585 New Users</p>
              <div className="flex items-center space-x-2 bg-[#eef5f0]">
                <MyIcon type="trend_up" />
                <p className="text-[12px] font-medium leading-[16.8px] text-[#589267]">12%</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-[12px] font-normal leading-[16.8px]">Free Users</p>
                <div className="flex items-center space-x-2">
                  <Progress percent={57} strokeColor="#000" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-normal leading-[16.8px]">Free Users</p>
                <div className="flex items-center space-x-2">
                  <Progress percent={57} strokeColor="#000" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-normal leading-[16.8px]">Free Users</p>
                <div className="flex items-center space-x-2">
                  <Progress percent={57} strokeColor="#000" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-lg border border-[#e4e4e4] p-5 pb-[29px]">
            <p className="text-[20px] font-medium leading-6">Credits Orders Summary</p>
            <div className="flex items-center space-x-3">
              <p className="text-[32px] font-medium leading-[38.4px]">585 New Users</p>
              <div className="flex items-center space-x-2 bg-[#eef5f0]">
                <MyIcon type="trend_up" />
                <p className="text-[12px] font-medium leading-[16.8px] text-[#589267]">12%</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[12px] font-normal leading-[16.8px]">Enrichment Credits</p>
                <div className="flex items-center space-x-2">
                  <Progress percent={57} strokeColor="#000" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-normal leading-[16.8px]">Scraping Credits</p>
                <div className="flex items-center space-x-2">
                  <Progress percent={57} strokeColor="#000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
