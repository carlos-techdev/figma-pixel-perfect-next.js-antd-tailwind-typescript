"use client"

import { Button, Checkbox, Input, Modal } from "antd"
import { useState } from "react"
import { btn_group } from "components/button"
import MyIcon from "components/icon"

export default function Security() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const deleteAccount = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between border-b pb-2">
        <div className="space-y-2">
          <p className="text-[20px] leading-[27px] font-semibold">Security</p>
          <p className="text-base text-[#666d80]">Manage your password</p>
        </div>
        {btn_group}
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Old Password</div>
        <div className="mt-2 sm:mt-0">
          <Input.Password className="h-12" />
        </div>
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
      <div className="flex items-center justify-between">
        <div className="space-y-1 mt-[19px]">
          <p className="text-base font-semibold">Log out of all devices</p>
          <p className="text-[14px] leading-[21px] text-[#727272]">Log out of all other active sessions on other devices besides this one.</p>
        </div>
        <Button className="bg-[#f2f2f2] font-medium w-[75px] h-[37px] rounded text-[14px] leading-[21px]">Log out</Button>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-base font-medium text-[#af4b4b]">Delete my account</p>
          <p className="text-[14px] leading-[21px] text-[#727272]">permanently delete the account and remove all your data</p>
        </div>
        <Button className="bg-[#f2f2f2] font-medium w-[127px] h-[37px] rounded text-[14px] leading-[21px]" onClick={deleteAccount}>
          Delete Account
        </Button>
      </div>
      <Modal centered open={isModalOpen} width={1056} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
        <div className="flex justify-between">
          <div className="text-base font-semibold">WARNING</div>
          <div className="space-x-2.5">
            <Button className="w-[102px] h-[26px] rounded-lg text-[12px] leading-[18px] text-[#0d0d12] font-semibold" onClick={handleOk}>
              Cancel
            </Button>
            <Button className="w-[124px] h-[26px] rounded-lg text-[12px] leading-[18px] text-white bg-[#ff4747]" onClick={handleOk}>
              Delete My Account
            </Button>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-[#e5ecf6] p-4">
          <div className="flex items-center space-x-1">
            <MyIcon type="warning" />
            <p className="text-sm font-bold">Are you sure you want to delete contact details?</p>
          </div>
          <p className="pl-6 text-[11px] leading-[18px] text-[#1c1c1c] opacity-40">
            {
              "This action is irreversible and will permanently lose your data and access to services. If you are sure, Check the box and click 'Delete Account'. To cancel, click “Cancel”."
            }
          </p>
        </div>
        <div className="mt-4 pl-3">
          <Checkbox><p className="text-sm text-[#1c1c1c]">I confirm that I want to delete my account</p></Checkbox>
        </div>
      </Modal>
    </div>
  )
}
