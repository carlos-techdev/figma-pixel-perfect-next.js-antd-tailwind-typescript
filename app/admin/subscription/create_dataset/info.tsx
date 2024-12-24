import { Button, Input, Select, Upload } from "antd"
import { btn_group } from "components/button"
import MyDragger from "components/dragger"
import MyIcon from "components/icon"

const category_options = [
  {
    value: "1",
    label: "B2B data",
  },
  {
    value: "2",
    label: "B2B",
  },
]

const field_options = [
  {
    value: "1",
    label: "25",
  },
  {
    value: "2",
    label: "30",
  },
]

const status_options = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Deactive",
  },
]

export default function Info() {
  return (
    <div className="pl-2 pr-7">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]  text-[#0d0d12]">Dataset Info</p>
          <p className="text-base text-[#666d80]">Update dataset details</p>
        </div>
        {btn_group}
      </div>
      <div className="grid border-b py-6 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Dataset photo</div>
        <div className="mt-2 flex items-center sm:mt-0">
          <MyIcon type="linkedin" width={48} height={48} />
          <Upload className="ml-4">
            <Button className="w-20 text-[12px] font-semibold leading-[18px]">Choose</Button>
          </Upload>
          <p className="ml-3 text-[14px] leading-[21px] text-[#808897]">JPG or PNG, 1MB max</p>
        </div>
      </div>
      <div className="text-[#666d80] text-base font-medium">
        <div className="border-b py-6">
          <div className="grid sm:grid-cols-2">
            <div>Dataset name</div>
            <Input defaultValue="B2B Linkedin" className="h-12" />
          </div>
          <div className="mt-6 grid sm:grid-cols-2">
            <div>Type</div>
            <Input defaultValue="Dataset" className="h-12" />
          </div>
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <div>Category</div>
          <Select className="h-12 w-full" defaultValue="1" options={category_options} />
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <div>Source</div>
          <Input defaultValue="https://www.linkedin.com" className="h-12" />
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <div>Records</div>
          <Input defaultValue="550m" className="h-12" />
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <div>Fields</div>
          <Select className="h-12 w-full" defaultValue="1" options={field_options} />
        </div>
        <div className="grid py-6 sm:grid-cols-2">
          <div>Status</div>
          <Select className="h-12 w-full" defaultValue="1" options={status_options} />
        </div>
      </div>

      <div className="grid py-6 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80] ">Sample file</div>
        <MyDragger />
      </div>
    </div>
  )
}
