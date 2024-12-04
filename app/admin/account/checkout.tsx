"use client"

import { Checkbox } from "antd"
import type { CheckboxProps } from "antd"
import { btn_group } from "components/button"

export default function Checkout() {

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e}`)
  }
  
  return (
    <div>
      <div className="flex items-center justify-between border-b pb-2">
        <div className="space-y-2">
          <p  className="text-[20px] leading-[27px] font-semibold">Checkout</p>
          <p className="text-base text-[#666d80]">Update checkout details</p>
        </div>
        {btn_group}
      </div>
      <div className="border-b py-4">
        <p  className="text-[20px] leading-[27px] font-semibold">Payment Methods</p>
        <p className="text-base text-[#666d80]">Check the box to enable the payment method.</p>
      </div>
      <div className="mt-4 space-y-4 border-b pb-2">
        <div>
          <Checkbox id="credit" onChange={onChange}>
            <span className="text-[14px] leading-6 text-[#afafaf]">Credit Card/Paddle</span>
          </Checkbox>
        </div>
        <div className="text-gray-500">
          <Checkbox id="wire" onChange={onChange}>
          <span className="text-[14px] leading-6 text-[#afafaf]">Wire Transfer</span>
          </Checkbox>
        </div>
        <div className="text-gray-500">
          <Checkbox id="crypto" onChange={onChange}>
          <span className="text-[14px] leading-6 text-[#afafaf]">Crypto</span>
          </Checkbox>
        </div>
      </div>
    </div>
  )
}
