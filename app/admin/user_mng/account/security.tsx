"use client"

import { Input, Select } from "antd"
import { btn_group } from "components/button"

export default function Security() {
  
  const status_options = [
    {
      value: "1",
      label: "Active",
    },
    {
      value: "2",
      label: "Pending",
    },
  ]

  return (
    <div>
      <div className="flex justify-between border-b pb-2">
        <div className="space-y-2">
          <p className="text-[20px] leading-[27px] font-semibold">Security</p>
          <p className="text-base text-[#666d80]">Manage User password</p>
        </div>
        {btn_group}
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">New Password</div>
        <div className="mt-2 sm:mt-0">
          <Input.Password className="h-12" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">New Password Confirmation</div>
        <div className="mt-2 sm:mt-0">
          <Input.Password className="h-12" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Account Status</div>
        <div className="mt-2 sm:mt-0">
        <Select defaultValue="1" className="h-12 w-full" options={status_options} />
        </div>
      </div>
    </div>
  )
}
