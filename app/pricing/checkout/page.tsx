"use client"

import { Radio, Space } from "antd"
import Info from "../info"
import Payment from "../payment"

const Checkout = () => {
  return (
    <div>
      <div className="border-y p-4 text-2xl font-semibold">Plan Builder</div>
      <div className="p-4 pb-20 sm:flex sm:space-x-8">
        <div className="sm:w-2/3">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Credits Purchase</p>
            <div className="flex items-start justify-between rounded-s-md bg-yellow-50 py-4 pr-8">
              <div className="space-y-2">
                <p className="text-lg font-semibold">Growth Plan</p>
                <p>Enrichment Credits 15,000 Credits</p>
                <p>Scraping Credits 25,000 Credits</p>
              </div>
              <div className="rounded-xl border border-gray-300 px-8 py-1 text-lg">1</div>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-8 text-[16px] font-bold leading-[19.2px]">
            <p>Frequency</p>
            <Radio.Group defaultValue={1}>
              <Space size={2} direction="horizontal">
                <Radio value={1}>Monthly</Radio>
                <Radio value={2}>Annually</Radio>
              </Space>
            </Radio.Group>
          </div>
          <Info />
        </div>
        <div className="sm:w-1/3">
          <p className="text-[18px] font-bold leading-[21.6px]">Order</p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between font-bold">
              <p className="text-[16px] leading-[19.2px]">Starter Plan</p>
              <p className="text-[13px] leading-[15.6px]">x</p>
            </div>
            <div className="flex justify-between text-[#333333]">
              <p className="text-base">Enrichment Credits</p>
              <p className="text-[16px] leading-[19.2px]">15,000 Credits</p>
            </div>
            <div className="flex justify-between border-b pb-[37px] text-[#333333]">
              <p className="text-base">Scraping Credits</p>
              <p className="text-[16px] leading-[19.2px]">25,000 Credits</p>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-[24px] font-bold leading-[28.8px] text-[#333333]">
            <p>Total</p>
            <p>
              $2338/<span className="text-[13px] leading-[15.6px]">Annually</span>
            </p>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  )
}

export default Checkout
