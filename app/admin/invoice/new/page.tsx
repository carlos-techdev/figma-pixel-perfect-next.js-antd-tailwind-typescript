"use client"

import { Button, Checkbox, Input, Select } from "antd"
import React, { useState } from "react"
import CountrySelect from "components/CountrySelect"
import { DROPZONE } from "constant/Admin/Invoice"
import AddProductModal from "./addProduct"
import { not_found_svg } from "./const"
import * as C from "./const"
export default function NewInvoice() {
  const [addProduct, setAddProduct] = useState(false)
  return (
    <>
      <div className="h-[69px] w-full border-y border-[rgb(229,231,235)] py-[20px] pl-[12px] text-[24px] font-bold leading-[120%] tracking-normal">
        Add New Invoices
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="mr-[49px] flex h-[88px] justify-between border-b border-solid border-gray-200 px-[24px]">
            <div className="text-[16px] font-medium leading-[88px] tracking-[2%]">Order Summary</div>
            <div
              className="cursor-pointer text-[16px] font-medium leading-[88px] tracking-normal"
              onClick={() => setAddProduct(!addProduct)}
            >
              + Add Products
            </div>
          </div>
          <div className="flex flex-col items-center pt-[23px] text-center">
            <div className="">{not_found_svg()}</div>
            <div className="mt-[4px] text-[28px] font-medium leading-[120%] tracking-normal">No Products Found</div>
          </div>
          {/* Bar */}
          <div className="mt-[48px] h-px w-full pr-[49px]">
            <div className="mt-[48px] h-px w-full border-t border-solid border-gray-200"></div>
          </div>
          {/* Invoice Detail */}
          <div className="py-[24px] pl-[24px] text-[16px] font-medium leading-[150%] tracking-[2%]">
            Invoice Details
          </div>
          <div className="mx-[19px] flex h-[546px] flex-col justify-between">
            <Input
              className="h-[48px] text-[16px] font-medium leading-[150%] tracking-[2%]"
              prefix={C.INVOICE_NAME()}
              placeholder="Invoice Name"
            ></Input>
            <div className="flex items-center rounded-[6px] border border-solid pl-[10px]">
              {C.INVOICE_STATUS()}
              <Select
                variant="borderless"
                placeholder="Status"
                style={{ outline: "none", width: "100%", height: "48px" }}
              />
            </div>
            <Input
              className="h-[48px] text-[16px] font-medium leading-[150%] tracking-[2%]"
              prefix={C.INVOICE_ASSIGN()}
              placeholder="Assign to user"
            ></Input>
            <Input
              className="h-[48px] text-[16px] font-medium leading-[150%] tracking-[2%]"
              prefix={C.INVOICE_EMAIL()}
              placeholder="User email"
            ></Input>
            <Input
              className="h-[48px] text-[16px] font-medium leading-[150%] tracking-[2%]"
              prefix={C.INVOICE_ISSUE()}
              placeholder="Issued Date"
            ></Input>
            <Select
              className="h-[48px] w-full text-[16px] font-medium leading-[150%] tracking-[2%]"
              placeholder="Payment Method"
            />
            <Input
              className="h-[48px] text-[16px] font-medium leading-[150%] tracking-[2%]"
              prefix={C.INVOICE_AMOUNT()}
              placeholder="Amount"
            ></Input>
            {/* Drag Drop Zone */}
            <div className="flex h-[140px] w-full items-center rounded-[6px] border border-dashed border-gray-200 px-[24px]">
              <div className="flex h-[60px] w-full flex-col items-center text-center">
                <div>{DROPZONE()}</div>
                <div className="mt-[16px] text-[14px]">
                  Drag & drop file here or <span className="text-[#0072DE]">choose file</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[934px] w-px pt-[43px]">
          <div className="h-full w-px border-l border-solid border-gray-200"></div>
        </div>
        <div className="w-1/2 pl-[21px]">
          {/* Title */}
          <div className="mr-[49px] flex h-[88px] items-center">
            <div className="text-[16px] font-bold leading-[120%] tracking-normal">Billing Info</div>
          </div>
          {/* Billing Info */}
          <div className="flex h-[688px] flex-col justify-between px-[10px]">
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Full Name</div>
              <Input className="h-[48px] w-[253px]" />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Email Address</div>
              <Input className="h-[48px] w-[253px]" />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Country</div>
              <CountrySelect />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="ml-[-10px] flex items-center gap-1">
              <div>
                <Checkbox checked></Checkbox>
              </div>
              <div className="flex flex-col">
                <div className="text-[20px] font-semibold">Company Info</div>
                <div className="font-medium text-gray-200">Please check the box in case you need a company invoice</div>
              </div>
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Compnay Name</div>
              <Input className="h-[48px] w-[253px]" />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Compnay Registration Number</div>
              <Input className="h-[48px] w-[253px]" />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Compnay Address</div>
              <Input className="h-[48px] w-[253px]" />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Country</div>
              <CountrySelect />
            </div>
            <div className="h-px w-full border-t border-solid border-gray-200"></div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <div className="tracking[2%] text-[16px] font-medium leading-[150%]">Compnay Website</div>
              <Input className="h-[48px] w-[253px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[68px] flex justify-end pr-[75px]">
        <div className="flex w-[560px] justify-between">
          <Button className="h-[40px] w-[248px] rounded-[4px] bg-[#F2F2F2] text-[16px] font-medium leading-[150%] tracking-normal text-black">
            Cancel
          </Button>
          <Button className="h-[40px] w-[248px] rounded-[4px] bg-black text-[16px] font-medium leading-[150%] tracking-normal text-white">
            Save
          </Button>
        </div>
      </div>
      <AddProductModal ModalOpen={addProduct} ChangeStatus={setAddProduct} />
    </>
  )
}
